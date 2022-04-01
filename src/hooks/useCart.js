import { useState } from "react"

const useCart=()=>{
    const[cart,setCart]=useState([])
    
    const handleAddToCart=(selectedItem)=>{
        const exist=cart.find(pd=>pd.index===selectedItem.index)
        if(!exist){
            const newCart=[...cart,selectedItem]
            setCart(newCart)
        
        }
        else{
            alert("it's already added")
        }
           
    }
    return[cart,setCart]
}
export default useCart