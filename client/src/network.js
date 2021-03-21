import axios from "axios"
import toastr from "toastr"

export const getAllCollections = async () => {
  try {
    const res = await axios.get("/api/collections")
    const data = await res.data
    return data.collections
  } catch (e) {
    console.log(e)
  }
}

export const addNewCollection = async (title, token) => {
  try {
    const res = await axios({
      url: "/api/collections",
      method: "post",
      data: title,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const getCollectionById = async (id) => {
  const res = await axios.get(`/api/collections/${id}`)
  const data = res.data
  return data.collection
}

export const editCollection = async (data, collectionId, token) => {
  const res = await axios({
    url: `/api/collections/${collectionId}`,
    method: "patch",
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
}

export const deleteCollectionById = async (collectionId, token) => {
  try {
    const res = await axios({
      url: `/api/collections/${collectionId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const getCameraById = async (cameraId) => {
  const res = await axios.get(`/api/cameras/${cameraId}`)
  return res.data
}

export const addNewCamera = async (data, collectionId, token) => {
  try {
    const res = await axios({
      url: `/api/cameras/collections/${collectionId}`,
      method: "post",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const deleteCamera = async (cameraId, token) => {
  try {
    const res = await axios({
      method: "delete",
      url: `/api/cameras/${cameraId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const editCamera = async (data, cameraId, token) => {
  const res = await axios({
    url: `/api/cameras/${cameraId}`,
    method: "patch",
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
}

export const loginUser = async (data) => {
  try {
    const res = await axios({
      method: "post",
      url: "/api/users/login",
      data: data,
    })

    const accessToken = res.data.accessToken

    return accessToken
  } catch (e) {
    console.log(e)
    toastr["error"]("Incorrect username/password", "Login Error")
  }
}

export const logoutUser = async () => {
  try {
    const res = await axios.post("/api/users/logout")
    const data = res.data
    return data
  } catch (e) {
    console.log(e)
  }
}
