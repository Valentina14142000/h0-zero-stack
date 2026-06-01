// Robot type definitions
export type RobotStatus = "active" | "offline" | "maintenance";

export interface Robot {
  id: string;
  name: string;
  status: RobotStatus;
  lastSeen: string;
  location: string;
}