import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../services/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    const docRef = doc(db, "productos", itemId)

    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() })
        }
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [itemId])

  if (loading) return <div className="container mt-5"><h3>Cargando detalle...</h3></div>
  if (!item) return <div className="container mt-5"><h3>El producto no existe.</h3></div>

  return <ItemDetail item={item} />
}

export default ItemDetailContainer
