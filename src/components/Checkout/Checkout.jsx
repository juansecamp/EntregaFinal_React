import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { db } from '../../services/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Checkout = () => {
    const { items, totalPrice, clear } = useCart();
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const order = {
            buyer,
            items: items.map(i => ({ 
                id: i.id, 
                nombre: i.nombre, 
                precio: i.precio, 
                qty: i.qty 
            })),
            total: totalPrice,
            date: serverTimestamp()
        };

        try {
            const ordersRef = collection(db, "orders");
            const docRef = await addDoc(ordersRef, order);
            setOrderId(docRef.id);
            clear(); 
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        return (
            <div className="container mt-5 text-center p-5 border rounded shadow">
                <h2 className="text-success">¡Compra exitosa!</h2>
                <p className="fs-4 mt-3">Tu número de orden es:</p>
                <div className="alert alert-primary d-inline-block px-5 py-3 fs-3 fw-bold">
                    {orderId}
                </div>
                <div className="mt-4">
                    <a href="/" className="btn btn-primary">Volver al inicio</a>
                </div>
            </div>
        );
    }

    if (items.length === 0) return <h2 className="text-center mt-5">El carrito está vacío</h2>;

    return (
        <div className="container mt-5" style={{maxWidth: '600px'}}>
            <div className="card p-4 shadow">
                <h2 className="mb-4">Finalizar Compra</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label className="form-label">Nombre Completo</label>
                        <input type="text" name="name" className="form-control" onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Teléfono</label>
                        <input type="number" name="phone" className="form-control" onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" onChange={handleInputChange} required />
                    </div>
                    <button type="submit" className="btn btn-success w-100 fs-5 py-2" disabled={loading}>
                        {loading ? 'Procesando...' : `Pagar $${Number(totalPrice).toLocaleString('es-AR')}`}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
