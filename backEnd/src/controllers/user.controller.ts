import { Request, Response } from "express";

const getItems = async (req: Request, res: Response) => {
  console.log("hola desde el controllador");
  res.send("Hola desde el controlador");
};
const getItem = async (req: Request, res: Response) => {
  console.log("hola desde el controllador");
  res.send("Hola desde el controlador");
};
const postItem = async (req: Request, res: Response) => {
  console.log("hola desde el controllador");
  res.send("Hola desde el controlador");
};
const putItem = async (req: Request, res: Response) => {
  console.log("hola desde el controllador");
  res.send("Hola desde el controlador");
};
const deleteItem = async (req: Request, res: Response) => {
  console.log("hola desde el controllador");
  res.send("Hola desde el controlador");
};

export { getItems, getItem, postItem, putItem, deleteItem };
