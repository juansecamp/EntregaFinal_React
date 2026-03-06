export const PRODUCTS = [
  {
    id: 'cpu-ryzen-5',
    title: 'AMD Ryzen 5 5600',
    category: 'procesadores',
    price: 189999,
    stock: 8,
    description: '6 núcleos / 12 hilos – AM4',
    image: 'https://via.placeholder.com/480x320?text=Ryzen+5600'
  },
  {
    id: 'gpu-rtx-4060',
    title: 'GeForce RTX 4060',
    category: 'placas-de-video',
    price: 529999,
    stock: 5,
    description: '8GB GDDR6 – DLSS 3',
    image: 'https://via.placeholder.com/480x320?text=RTX+4060'
  },
  {
    id: 'monitor-lg-27',
    title: 'Monitor LG 27" 144Hz',
    category: 'monitores',
    price: 369999,
    stock: 10,
    description: 'IPS 1080p 144Hz – 1ms',
    image: 'https://via.placeholder.com/480x320?text=LG+27%22+144Hz'
  }
]

export const getProducts = (categoryId) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(categoryId ? PRODUCTS.filter(p => p.category === categoryId) : PRODUCTS)
    }, 600)
  })

export const getProductById = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = PRODUCTS.find(p => p.id === id)
      found ? resolve(found) : reject(new Error('No encontrado'))
    }, 600)
  })
    ``