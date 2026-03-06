const BASE_URL = import.meta.env.VITE_API_URL || 'https://dummyjson.com'
const ALLOWED = ['smartphones', 'laptops', 'tablets', 'mobile-accessories', 'smart-watches']

function normalize(p) {
  if (!p) return null
  return {
    id: p.id,
    title: p.title,
    price: p.price,
    description: p.description,
    image: Array.isArray(p.images) && p.images.length ? p.images[0] : p.thumbnail,
    stock: typeof p.stock === 'number' ? p.stock : 10,
    category: p.category
  }
}

async function fetchByCategory(cat) {
  const res = await fetch(`${BASE_URL}/products/category/${encodeURIComponent(cat)}`)
  if (!res.ok) throw new Error('Error al traer productos')
  const data = await res.json()
  const list = Array.isArray(data) ? data : (data.products || [])
  return list.map(normalize).filter(Boolean)
}

export async function fetchProducts(categoryId) {
  if (categoryId) {
    if (!ALLOWED.includes(categoryId)) return []
    return fetchByCategory(categoryId)
  }
  const results = await Promise.all(ALLOWED.map(fetchByCategory))
  return results.flat()
}

export async function fetchProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`)
  if (!res.ok) throw new Error('Error al traer producto')
  const p = await res.json()
  return normalize(p)
}
``