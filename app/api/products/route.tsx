import { NextRequest, NextResponse } from "next/server";
import schemaproduct from "./schemaproduct";

export async function GET(request:NextRequest){

  return NextResponse.json([{"productname":"milk","price":"50"},{"productname":"curd","price":"70"}])

}
export async function POST(request:NextRequest){
  const body= await request.json()
  const validation=schemaproduct.safeParse(body)
  if(!validation.success){
    return NextResponse.json(validation.error)
  }
  return NextResponse.json(body)
}