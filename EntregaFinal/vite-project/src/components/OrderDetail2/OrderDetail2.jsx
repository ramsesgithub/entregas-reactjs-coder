export const OrderDetail2 = ({id, buyer, items, total}) => {
  return (
    <div>
        <p>Id de la compra: <strong>{id}</strong></p>
        <p>Nombre: {buyer.name}</p>
        <p>Email: {buyer.email}</p>
        {items.map(item=><p>{item.name}</p>)}
        <p>Total de la compra: <strong>${total}</strong></p>
    </div>  
  )
}
