import { Router } from "express";
import { readdirSync } from 'fs'
/* MARK: De esta manera lo que podemos realizar es lo crear una rutas dinamicas, estas con el nombre del archivo que estamos creando, facilitando el estar importando a cada rato las rutas en el app, asi solo importamos una sola ruta y esta se encarga de lo demas */
const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift()
    return file
}
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router);
        })
    }
})
export { router }