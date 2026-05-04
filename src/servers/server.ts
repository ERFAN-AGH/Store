import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

export async function getProducts() {
  const { data } = await client.get("/posts");
  return data;
}
export async function getProductItem(id: string | number) {
  const { data } = await client(`/posts/${id}`);
  return data;
}
