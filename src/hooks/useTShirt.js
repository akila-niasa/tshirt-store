import { useEffect, useState } from "react"

const useTShirt=()=>{
    const[cloths,setCloths]=useState([])

    useEffect(()=>{
        fetch('tshirts.json')
        .then(res=>res.json())
        .then(data=>setCloths(data))
    },[])
    return[cloths,setCloths]
}
export default useTShirt