import testeo from "@/models/testeo";
import ConnectDB from "@/libs/mongoose";
import {NextResponse} from "next/server";

export const dynamic = "force-dinamyc";

export async function GET(){
    await ConnectDB();
    const res = await testeo.find();
    const data = await JSON.parse(JSON.stringify(res));
    console.log(data);
    return data;
}

export async function POST(request){
    await ConnectDB();
    const data = await request.json()
    const res = await testeo.create(data);
    return NextResponse.json("se subio correctamente");
}