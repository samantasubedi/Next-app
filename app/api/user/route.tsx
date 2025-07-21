//this is a route file , a folder can have either a page file which returns html elements or a route file which handles http requestsn
import { NextRequest, NextResponse } from "next/server";
 
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {

const user = await prisma.user.findMany()
  return NextResponse.json({user});

}
