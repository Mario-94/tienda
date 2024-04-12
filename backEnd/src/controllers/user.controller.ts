import { Request, Response } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
} from "../services/usuarios.services";

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getUsers();
    res.status(200).send(response);
  } catch (error) {
    res.send(`ERROR_GET_USERS ${error}`);
  }
};
const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getUser(id);
    res.status(200).send(response);
  } catch (error) {
    res.send(`ERROR_GET_USER ${error}`);
  }
};
const postItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const response = await postUser(body);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);

    res.send(`ERROR_POST_USER ${error}`);
  }
};
const putItem = async ({ body, params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await putUser(id, body);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.send(`ERROR_PUT_USER ${error}`);
  }
};
const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteUser(id);
    res.status(200).send(response);
  } catch (error) {
    res.send(`ERROR_DELETE_USER ${error}`);
  }
};

export { getItems, getItem, postItem, putItem, deleteItem };
