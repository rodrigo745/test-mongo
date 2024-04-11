import mongoose from "mongoose";

export const dynamic = "force-dinamyc";

export default async function ConnectDB(){
    await mongoose.connect(process.env.ENLACE);
}