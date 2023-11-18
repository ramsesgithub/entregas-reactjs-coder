import {Item} from "../../index"
 
export const ItemList = ({phones}) => {
  return phones.map(phone => <Item key={phone.id} {...phone}/> )
}
