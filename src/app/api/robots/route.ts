import { NextResponse } from "next/server";
import { db, TABLE_NAME } from "@/lib/dynamo";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

export async function GET() {
  try {
    const result = await db.send(
      new ScanCommand({
        TableName: TABLE_NAME,
      })
    );

    return NextResponse.json(result.Items || []);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch robots" },
      { status: 500 }
    );
  }
}