import { api } from "./api";

export const getUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

export const getUserById = async (id: string) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

export const getPosts = async () => {
  const res = await api.get("/posts");
  return res.data;
};

export const getTodos = async () => {
  const res = await api.get("/todos");
  return res.data;
};

export const getUserPosts = async (id: string) => {
  const res = await api.get(`/posts?userId=${id}`);
  return res.data;
};

export const getUserTodos = async (id: string) => {
  const res = await api.get(`/todos?userId=${id}`);
  return res.data;
};
