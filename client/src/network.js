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

export const getCollectionById = async (id) => {
  const res = await axios.get(`/api/collections/${id}`);
  const data = res.data;
  return data.collection;
};
