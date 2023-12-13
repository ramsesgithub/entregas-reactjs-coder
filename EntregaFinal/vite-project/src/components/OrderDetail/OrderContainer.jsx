import { OrderDetail2 } from "../OrderDetail2/OrderDetail2"

export const OrderDetail = ({orders}) => {
   return orders.map(order => <OrderDetail2 key={order.id} {...order}/> )
}
