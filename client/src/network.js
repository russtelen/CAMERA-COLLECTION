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

export const loginUser = async (data) => {
  try {
    const res = await axios({
      method: "post",
      url: "/api/users/login",
      data: data,
    });

    const accessToken = res.data.accessToken;

    return accessToken;
  } catch (e) {
    console.log(e);
    console.log("Incorrect username or password");
  }
};
