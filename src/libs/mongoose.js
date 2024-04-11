import mongoose from "mongoose";

export default async function ConnectDB(){
    const res = await fetch(process.env.ENLACE, {
        next: {revalidate: 0 }
    });

    await mongoose.connect(res);
}