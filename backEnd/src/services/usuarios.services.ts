import { user } from "../interfaces/user.interface";
import UserModel from "../models/user/user";

const getUsers = async () => {
  const response = await UserModel.find({});
  return response;
};
const getUser = async (id: string) => {
  const response = await UserModel.findById(id);
  return response;
};
const postUser = async (data: user) => {
  const response = await UserModel.create(data);
  return response;
};
const putUser = async (id: string, data: user) => {
  const response = await UserModel.findByIdAndUpdate(id, data, { new: true });
  return response;
};
const deleteUser = async (id: string) => {
  const response = await UserModel.findByIdAndDelete(id);
  return response;
};
export { getUsers, getUser, postUser, putUser, deleteUser };
