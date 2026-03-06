import ItemCount from './ItemCount'
import { useCart } from '../context/CartContext'

const ItemDetail = ({ item }) => {
  if (!item) return null

  const { nombre, precio, descripcion, imagen, stock } = item
  const { addItem } = useCart()

  const handleAdd = (qty) => {
    if (addItem) {
      addItem(item, qty)
    }
  }

  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-md-6">
          <img src={imagen} className="img-fluid rounded shadow" alt={nombre} />
        </div>
        <div className="col-md-6 text-start">
          <h2 className="fw-bold">{nombre}</h2>
          <p className="h3 text-primary my-3">
            ${Number(precio).toLocaleString('es-AR')}
          </p>
          <p className="text-muted">{descripcion}</p>
          <hr />
          <ItemCount stock={Number(stock) || 0} initial={1} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
