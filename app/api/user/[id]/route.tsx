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
export async function POST(request:NextRequest, {params: { id } }: props) {
  const body= await request.json()    //data sent from frontend is received here
 if(id>10){return(NextResponse.json({"error":"id too large"}))}
  if (!body.name){                     //body is the data sent from fronted to be updated in the database
    return(NextResponse.json({error:"please provide a name field"},{status:400}))// checking if the request body is valid, request body is the data sent to be updated in the database we are checking if its format matches the format of the data stored as every data must me stored in same format
  }
  else {
    return(NextResponse.json({"id":id,"name":body.name}))
  }
}
export async function PUT(request:NextRequest,id:props){            //PUT function updates the existing object while POST creates a new object
  const body=await request.json();
if (!body.name){
  return NextResponse.json({"error":"name field is required"})
}
else{
  return NextResponse.json({"id":id,"name":body.name})
}

}