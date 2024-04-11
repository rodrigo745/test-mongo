import mongoose, { Schema } from "mongoose";

const esquema = new Schema({
    titulo: String,
    nombre: String,
    edad: Number
});

export default mongoose.models.testeo || mongoose.model("testeo", esquema);