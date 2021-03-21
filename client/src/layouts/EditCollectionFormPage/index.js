import React, { useState, useEffect } from "react"
import EditCollectionForm from "../../components/EditCollectionForm"
import { useParams, useHistory } from "react-router-dom"
import { getCollectionById, editCollection } from "../../network"
import toastr from "toastr"

const EditCollectionFormPage = () => {
  const [collection, setCollection] = useState("")
  const token = localStorage.getItem("token")
  const { collectionId } = useParams()
  const history = useHistory()

  useEffect(() => {
    ;(async () => {
      const res = await getCollectionById(collectionId)
      setCollection(res)
    })()
  }, [collectionId])

  useEffect(() => {}, [collection])

  const edit = async (data) => {
    const res = await editCollection(data, collectionId, token)

    if (res) {
      toastr["success"](res.message)
      history.push(`/collections/${collectionId}`)
      return
    }

    toastr["error"]("Oops something went wrong")
  }

  return <EditCollectionForm edit={edit} collection={collection} />
}

export default EditCollectionFormPage
