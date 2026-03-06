import { createContext, useContext, useMemo, useState, useEffect } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(() => {
        try { return JSON.parse(localStorage.getItem('cart')) || [] } catch { return [] }
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items))
    }, [items])

    const addItem = (product, qty = 1) => {
        setItems(prev => {
            const i = prev.findIndex(p => p.id === product.id)
            if (i >= 0) {
                const x = [...prev]
                const max = product.stock || 9999
                x[i] = { ...x[i], qty: Math.min(x[i].qty + qty, max) }
                return x
            }
            // CORRECCIÓN: Guardamos usando los nombres de tu Firebase
            return [...prev, { 
                id: product.id, 
                nombre: product.nombre, 
                precio: product.precio, 
                imagen: product.imagen, 
                stock: product.stock || 9999, 
                qty 
            }]
        })
    }

    const inc = (id) => setItems(prev => prev.map(p => p.id === id ? { ...p, qty: Math.min(p.qty + 1, p.stock) } : p))
    const dec = (id) => setItems(prev => prev.map(p => p.id === id ? { ...p, qty: Math.max(p.qty - 1, 1) } : p))
    const removeItem = (id) => setItems(prev => prev.filter(p => p.id !== id))
    const clear = () => setItems([])

    const totalQty = useMemo(() => items.reduce((a, b) => a + b.qty, 0), [items])
    
    // CORRECCIÓN: El cálculo del total ahora usa .precio
    const totalPrice = useMemo(() => items.reduce((a, b) => a + b.qty * Number(b.precio || 0), 0), [items])

    return (
        <CartContext.Provider value={{ items, addItem, inc, dec, removeItem, clear, totalQty, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
