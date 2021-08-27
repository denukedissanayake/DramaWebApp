import React from 'react'

import './CategoryItem.css'

import Card from '../UIElements/Card'


const CategoryItem = props => {
    return (
        // <li className="category-List-item">
    //{/* <Card> */}
    <div className="category-item">
        <div className='item-image'>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className='item-count'>
            <h5>{props.ratings}({props.ratingCount})</h5>
        </div>
        <div className='item-info'>
            <h2>{props.title}</h2>
            <h4>{props.genre}</h4>
            <p>{props.description}</p>
        </div>
    </div>
   // {/* </Card> */}
    // </li>
    );
}

export default CategoryItem;