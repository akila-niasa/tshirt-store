import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTShirt from '../../hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const[cloths,setCloths]=useTShirt()
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
    const removeToCart=(selectItem)=>{
        const rest=cart.filter(pd=>pd.index!==selectItem.index)
            setCart(rest)

        
    }
    return (
        <div className='row mt-2'>
            <div className="col-lg-8 t-shirt-container">
                <div className='row'>
                {
                    cloths.map(cloth=><TShirt key={cloth.index} cloth={cloth} handleAddToCart={handleAddToCart}></TShirt>)
                }
                </div>
            </div>
            <div className="col-lg-4 cart-container">
                <Cart cart={cart} removeToCart={removeToCart}>
                    <Link to='/orderreview'>
                        <button>revieworder</button>
                    </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Home;