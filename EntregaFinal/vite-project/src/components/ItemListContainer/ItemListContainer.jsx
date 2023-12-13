import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import { FirebaseContext } from "../../context/FirebaseContext";


export const ItemListContainer = () => {
  const {category} = useParams();
  const { phones, getPhonesDB, isLoading } = useContext(FirebaseContext)
   
  useEffect(() => {
      getPhonesDB(category);
  }, [category]);


  return (
      <main>
          <div className="items">
              {isLoading ? <div  className="lds-ring loader" ><div></div><div></div><div></div><div></div></div> :  <ItemList phones={phones}/>}
          </div>
      </main>
  )
}