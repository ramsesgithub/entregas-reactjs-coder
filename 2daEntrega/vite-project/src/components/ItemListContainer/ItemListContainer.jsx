import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPhones, ItemList } from "../../index";
import "./ItemListContainer.css";


export const ItemListContainer = () => {
    
    const {category} = useParams();
    
    const [phones, setPhones] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getPhones()
        .then(resp => {
            //Verificar si existe categoría
            if(category) {
                const productsFilter = resp.filter(product => product.category === category);
                if(productsFilter.length > 0){
                    setPhones(productsFilter)
                } else setPhones(resp)
            } else setPhones(resp);
            setIsLoading(false);
        })
        .catch(error => console.log(error));
    }, [category]);


    return (
        <main>
            <div className="items">
                { isLoading ? <div className="lds-ring loader" ><div></div><div></div><div></div><div></div></div> : <ItemList phones={phones}/> }
            </div>
        </main>
    )
}