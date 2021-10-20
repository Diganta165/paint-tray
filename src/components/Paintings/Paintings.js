import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Paintings.css';


const Paintings = (props) => {

    const { title, artist, price, created, image, movement } = props.art;
    return (
        <div className="painting">
            <div className="col ">
                <div className="card h-100">
                    <div className="w-100 h-50">
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h5>Artist: {artist}</h5>
                        <p>Created: {created}</p>
                        <p>Movement: {movement}</p>
                        <h4>Price: ${price}</h4>
                    </div>
                    <button onClick={()=>props.handleAddToCart(props.art)} className='btn addToCart-button'><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                </div>
            </div>


        </div>
    );
};

export default Paintings;