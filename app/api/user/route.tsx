//this is a route file , a folder can have either a page file which returns html elements or a route file which handles http requestsn
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "samanta",
      phone: 9700009945,
      address: "kathmandu",
    },
    {
      id: 2,
      name: "harry",
      phone: 9700009945,
      address: "us",
    },
  ]);
}
