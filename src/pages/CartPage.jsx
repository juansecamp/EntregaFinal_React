import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartPage = () => {
    const { items, inc, dec, removeItem, clear, totalPrice, totalQty } = useCart()

    if (!items.length) {
        return (
            <div className="text-center py-5">
                <h4>Tu carrito está vacío</h4>
                <Link className="btn btn-primary mt-3" to="/">Ver productos</Link>
            </div>
        )
    }

    return (
        <div className="row g-4 mt-3">
            <div className="col-12 d-flex justify-content-between align-items-center">
                <h4>Carrito ({totalQty})</h4>
                <button className="btn btn-outline-danger btn-sm" onClick={clear}>Vaciar Carrito</button>
            </div>

            <div className="col-12">
                <div className="table-responsive">
                    <table className="table align-middle">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th style={{ width: 140 }}>Cantidad</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(p => (
                                <tr key={p.id}>
                                    <td className="d-flex align-items-center gap-2">
                                        {/* Corregido: p.imagen y p.nombre */}
                                        <img src={p.imagen} alt={p.nombre} width="56" height="56" style={{ objectFit: 'cover', borderRadius: 6 }} />
                                        <span>{p.nombre}</span>
                                    </td>
                                    {/* Corregido: p.precio */}
                                    <td>${Number(p.precio).toLocaleString('es-AR')}</td>
                                    <td>
                                        <div className="btn-group">
                                            <button className="btn btn-outline-secondary btn-sm" onClick={() => dec(p.id)}>-</button>
                                            <span className="btn btn-outline-secondary btn-sm disabled">{p.qty}</span>
                                            <button className="btn btn-outline-secondary btn-sm" onClick={() => inc(p.id)}>+</button>
                                        </div>
                                    </td>
                                    {/* Corregido: p.precio * p.qty */}
                                    <td>${(Number(p.precio) * p.qty).toLocaleString('es-AR')}</td>
                                    <td>
                                        <button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(p.id)}>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold fs-5">Total</td>
                                <td className="fw-bold fs-5 text-success">${Number(totalPrice).toLocaleString('es-AR')}</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div className="d-flex justify-content-end gap-2 mb-5">
                    <Link className="btn btn-outline-secondary" to="/">Seguir comprando</Link>
                    <Link className="btn btn-success" to="/checkout">Finalizar Compra</Link>
                </div>
            </div>
        </div>
    )
}

export default CartPage
