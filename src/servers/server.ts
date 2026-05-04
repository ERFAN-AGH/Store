import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

export async function getProducts() {
  const { data } = await client.get("/posts");
  return data;
}

export async function getPtoduct(id: number | string) {
  const { data } = await client(`/posts/${id}`);
  return data;
}
