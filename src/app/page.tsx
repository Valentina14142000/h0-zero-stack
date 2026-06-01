"use client";

import { useEffect, useState } from "react";
import type { Robot } from "@/types/robot";

export default function Dashboard() {
  const [robots, setRobots] = useState<Robot[]>([]);

  useEffect(() => {
    fetch("/api/robots")
      .then((res) => res.json())
      .then(setRobots);
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Robot Fleet Dashboard 🤖
      </h1>

      <div className="grid gap-4">
        {robots.map((robot) => (
          <div
            key={robot.id}
            className="border p-4 rounded-lg shadow-sm"
          >
            <h2 className="font-semibold">{robot.name}</h2>
            <p>Status: {robot.status}</p>
            <p>Location: {robot.location}</p>
            <p>Last seen: {robot.lastSeen}</p>
          </div>
        ))}
      </div>
    </main>
  );
}