import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../config/firebaseConfig";
import { ItemDetailError } from "../components/ItemDetailError/ItemDetailError";

export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({ children }) => {
    const [phones, setPhones] = useState([]);
    const [phone, setPhone] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState([])

    const getPhonesDB = (category) => {
    const myProducts = category  ? query( collection( db, "products" ), where("category", "==", category)) : query( collection( db, "products" ) ) //Filtrar por category
    getDocs(myProducts)
    .then(resp => {
      setIsLoading(false)
      const productList = resp.docs.map(doc => {
        const product = {
          id: doc.id,
          ...doc.data()
        }
        return product
      })
      setPhones(productList)

    })
    .catch(error => console.log(error))
    }


    const getPhoneById = (id) => {
        const productRef = doc(db, "products", id);
        getDoc(productRef).then(resp => {
            if(resp.exists()){
                const prod = {
                    id: resp.id,
                    ...resp.data()
                }
                setIsLoading(false)
                setPhone(prod)
            }else{
                setIsLoading(true)
            }
        })
      }



    const addOrderDB = (cartProducts, userData, total) => { 
        const newOrder = {
            buyer: userData,
            items: cartProducts,
            data: serverTimestamp(),
            total
        }
        console.log(newOrder);
        addDoc( collection(db, "orders"), newOrder );
    }


    const getOrderDB = () => {
      const myOrders = query( collection( db, "orders" ) )
      getDocs(myOrders)
      .then(resp => {
        const orderList = resp.docs.map(doc => {
          const order = {
            id: doc.id,
            ...doc.data()
          }
          return order
        })
        setOrders(orderList)
      })
      .catch(error => console.log(error))
  
    }



    const objetValue = {
        phones,
        phone,
        isLoading,
        getPhonesDB,
        getPhoneById,
        addOrderDB,
        getOrderDB,
        orders
    };

  return <FirebaseContext.Provider value={objetValue}> {children} </FirebaseContext.Provider>;
};