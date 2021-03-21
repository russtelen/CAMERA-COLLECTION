import React from "react"
import NewCollectionForm from "../../components/NewCollectionForm"
import { useHistory } from "react-router-dom"
import { addNewCollection } from "../../network"
import toastr from "toastr"

const NewCollectionFormPage = () => {
  const history = useHistory()
  // Get the token from local storage
  const token = localStorage.getItem("token")

  const submit = async (title) => {
    const res = await addNewCollection(title, token)
    if (res == undefined) {
      toastr["error"]("Error adding new collection")
      return
    }

    toastr["success"](res.message)
    history.push("/collections")
  }

  return (
    <div className="animate__animated animate__fadeIn">
      <NewCollectionForm submit={submit} />
    </div>
  )
}

export default NewCollectionFormPage
