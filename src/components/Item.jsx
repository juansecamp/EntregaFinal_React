import { Link } from 'react-router-dom'

const Item = ({ product }) => {
  // 1. Verificación de seguridad
  if (!product) return null;

  // 2. Desestructuración con los nombres de TU Firebase
  const { id, nombre, precio, imagen } = product;

  return (
    <div className="card h-100">
      {/* Usamos un placeholder si la imagen falla */}
      <img 
        src={imagen || 'https://via.placeholder.com'} 
        className="card-img-top" 
        alt={nombre || 'Producto'} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{nombre || "Sin nombre"}</h5>
        <p className="card-text mb-2">
          ${precio ? Number(precio).toLocaleString('es-AR') : '0'}
        </p>
        <Link to={`/item/${id}`} className="btn btn-primary mt-auto">
          Ver detalle
        </Link>
      </div>
    </div>
  )
}

export default Item
