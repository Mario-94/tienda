import mongoose, { Schema } from "mongoose";
import { user } from "../../interfaces/user.interface";

const userSchema = new Schema<user>(
  {
    nombre: { type: String, required: true },
    apellidoPaterno: { type: String, required: true },
    apellidoMaterno: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: {
      type: String,
      enum: ["administrador", "usuario", "cajero"],
      default: "usuario",
    },
    direccion: {
      ciudad: { type: String, required: true },
      numeroCasa: { type: String, required: true },
      municipio: { type: String, required: true },
      colonia: { type: String, required: true },
    },
    telefono: {
      numTel: { type: String, required: true },
      lada: { type: String, required: true },
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);
const UserModel = mongoose.model("usuarios", userSchema);
export default UserModel;
