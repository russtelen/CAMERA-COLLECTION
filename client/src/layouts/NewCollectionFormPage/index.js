import React from "react"
import NewCollectionForm from "../../components/NewCollectionForm"

const NewCollectionFormPage = () => {
  const addNewCollection = (title) => {
    console.log(title)
  }
  return <NewCollectionForm addNewCollection={addNewCollection} />
}

export default NewCollectionFormPage
