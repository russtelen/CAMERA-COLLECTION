import axios from "axios";

export const getAllCollections = async () => {
  try {
    const res = await axios.get("/api/collections");
    const data = await res.data;
    return data.collections;
  } catch (e) {
    console.log(e);
  }
};
