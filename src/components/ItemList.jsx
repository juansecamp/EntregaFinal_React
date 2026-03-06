import Item from './Item'

const ItemList = ({ items }) => {
  return (
    <div className="row g-3">
      {Array.isArray(items) && items.filter(Boolean).map(product => (
        <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
          <Item product={product} />
        </div>
      ))}
    </div>
  )
}

export default ItemList