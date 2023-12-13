import { useContext, useEffect, useState } from "react";
import { ItemDetail,  } from "../../index";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { FirebaseContext } from "../../context/FirebaseContext";


export const ItemDetailContainer = () => {

    const { phone, getPhoneById, isLoading } = useContext(FirebaseContext);
    const { id } = useParams();

    useEffect(() => {
      getPhoneById(id);
    }, []);


  return (isLoading ? <div className="lds-ring2 loader2" ><div></div><div></div><div></div><div></div></div> : <ItemDetail {...phone}/>)
}
