import React from 'react';
import './Product-list.css';

var arrow2=">"


function ProductList (props) {
    const {productinfo}=props;
    return (
    <div className="product-list">
        <div className='pic'>
            <div className='squarebox'></div>
            <img src={productinfo.Photo}/>
        </div>
        <div className='txt'>
            <h2>{productinfo.Name}</h2>
            <p>{productinfo.Description}</p>
        </div>
        <div className='ar2'>{arrow2}</div>
    </div>
    )
}

export default ProductList;