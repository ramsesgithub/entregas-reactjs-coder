import { useEffect, useState } from "react";
import { ItemDetail, getPhoneById } from "../../index";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const { id } = useParams();

    const [phone, setPhone] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        getPhoneById(id)
        .then(resp => {
          setPhone(resp);
          setIsLoading(false)
        })
        .catch(error => console.log(error));
    }, []);


  return (isLoading ? <div  className="lds-ring loader" ><div></div><div></div><div></div><div></div></div> : <ItemDetail {...phone}/>)
}
