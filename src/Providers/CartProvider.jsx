import React, { useEffect, useState } from 'react';
import { CartContext } from './Context';
import { getCart } from '../utils';

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    useEffect(()=>{
         setCart(getCart())
    },[])
    return (
        <div>
            <CartContext.Provider value={{cart,setCart}}>
                {children}
            </CartContext.Provider>
        </div>
    );
};

export default CartProvider;