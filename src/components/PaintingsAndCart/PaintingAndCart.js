import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Paintings from '../Paintings/Paintings';

import './PaintingAndCart.css'

const PaintingAndCart = () => {

    // state for paints 
    const [arts, setArts] = useState([]);

    //state for cart eventhandler
    const  [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res=> res.json())
        .then(data=> setArts(data))
    },[])


    const handleAddToCart = (art)=>{
       
        const newCart = [...cart, art];
        setCart(newCart);
        
    }


    return (
        <div className="paintingAndCart-section pt-3">
            <div className="paintingAndCart-container">
                
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    arts.map( art => <Paintings art={art} key = {art.id} handleAddToCart={handleAddToCart}></Paintings>)
                }
                </div>
                <div className="cart-container">
                    {
                        <Cart cart = {cart}></Cart>
                    }
                </div>

            </div>
        </div>
    );
};

export default PaintingAndCart;