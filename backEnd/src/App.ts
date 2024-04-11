import express from "express";
import cors from 'cors'
const app = express();
const PORT = 4002
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send('Hello world!')
})
app.listen(PORT, () => {
    console.log(`Corriendo en el puerto: ${PORT}`);

})
