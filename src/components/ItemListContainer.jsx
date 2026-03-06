import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const productsRef = collection(db, "productos")

    const q = categoryId 
      ? query(productsRef, where("categoria", "==", categoryId))
      : productsRef

    getDocs(q)
      .then((snapshot) => {
        const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setItems(docs)
      })
      .catch(error => console.log("Error buscando items", error))
      .finally(() => setLoading(false))

  }, [categoryId])

  if (loading) return <h3>Cargando productos...</h3>

  return <ItemList items={items} />
}

export default ItemListContainer
