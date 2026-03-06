import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const CartWidget = () => {
  const { totalQty } = useCart()
  return (
    <Link to="/cart" className="btn btn-outline-light position-relative">
      <i className="bi bi-cart3"></i>
      {totalQty > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalQty}
        </span>
      )}
    </Link>
  )
}

export default CartWidget