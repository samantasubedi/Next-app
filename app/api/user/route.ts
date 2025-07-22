//this is a route file , a folder can have either a page file which returns html elements or a route file which handles http requestsn
import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  try {
    const user = await prisma.user.findMany();
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.email)
      return NextResponse.json({ error: "Please provide a email" });

    const previousUser = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (previousUser) {
      return NextResponse.json({ Error: "Email already used" });
    }

    const user = await prisma.user.create({
      data: {
        email: data.email,
      },
    });

    
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
