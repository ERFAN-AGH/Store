import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:3000" });

export async function getProduct() {
  const { data } = await client("/posts");
  return data;
}
