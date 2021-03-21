import React, { useState, useEffect } from "react"
import EditCollectionForm from "../../components/EditCollectionForm"
import { useParams } from "react-router-dom"
import { getCollectionById } from "../../network"

const EditCollectionFormPage = () => {
  const [collection, setCollection] = useState("")

  const { collectionId } = useParams()

  useEffect(() => {
    ;(async () => {
      const res = await getCollectionById(collectionId)
      setCollection(res)
    })()
  }, [collectionId])

  useEffect(() => {}, [collection])

  const edit = (data) => {
    console.log(data)
  }
  return <EditCollectionForm edit={edit} collection={collection} />
}

export default EditCollectionFormPage
