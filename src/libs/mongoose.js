import mongoose from "mongoose";

export default async function ConnectDB(){
    await mongoose.connect("mongodb+srv://rodrigoquinteros:roklee2611@cluster0.sr17qvd.mongodb.net/test-mongo");
}