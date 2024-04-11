import mongoose from "mongoose";

export default async function ConnectDB(){
    await mongoose.connect(process.env.ENLACE);
}