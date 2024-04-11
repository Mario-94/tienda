import 'dotenv/config'
import express from "express";
import cors from 'cors'
import dbConnect from './config/mongo';
import { router } from './router';


const app = express();

const PORT = process.env.PORT || 4003
// Configuracion para admitir cualquier entrada de datos, aun no la configuro
app.use(cors());
// Cambiamos el modo para que admita archivos json
app.use(express.json());
app.use(router);

//Conexion a la base de datos
dbConnect().then(() => console.log('Conexion ready')
)
//Puerto de salida de servidor
app.listen(PORT, () => {
    console.log(`Corriendo en el puerto: ${PORT}`);
})

