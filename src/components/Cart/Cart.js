import React from 'react';
import OrderReview from '../OrderReview/OrderReview';

const Cart = ({cart,removeToCart,children}) => {
    console.log(cart);
    let command 
    if(cart.length==0){
       command= <p>please buy a product</p>
    }else if(cart.length==1){
        command=<p>you want another</p>
    }else{
        command=<p>thanks for buying</p>
    }
    return (
        <div>
            <h1>items selected:{cart.length}</h1>
            {
                cart.map(tshirt=><p>{tshirt.name}
                <button onClick={()=>removeToCart(tshirt)}>X</button>
                </p>
                
                )
            }
           {children}
            {command}
        </div>
    );
};

export default Cart;