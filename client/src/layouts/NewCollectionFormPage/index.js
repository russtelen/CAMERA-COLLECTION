import React from "react"
import NewCollectionForm from "../../components/NewCollectionForm"
import { useHistory } from "react-router-dom"
import { addNewCollection } from "../../network"

const NewCollectionFormPage = () => {
  const history = useHistory()
  // Get the token from local storage
  const token = localStorage.getItem("token")

  const submit = async (title) => {
    const res = await addNewCollection(title, token)
    if (res == undefined) {
      alert("Error adding new collection")
      return
    }

    alert(res.message)
    history.push("/collections")
  }

  return <NewCollectionForm submit={submit} />
}

export default NewCollectionFormPage
