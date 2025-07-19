import { NextRequest, NextResponse } from "next/server";
interface props {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: props) {
  if (id == 1)
    return NextResponse.json({
      id: 1,
      name: "samanta",
      phone: 9700009945,
      address: "kathmandu",
    });
  else if (id == 2)
    return NextResponse.json({
      id: 2,
      name: "harry",
      phone: 9700009945,
      address: "us",
    });
  else return NextResponse.json("the id doesnot exist");
}
