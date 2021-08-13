import React from 'react'

import './CategoryItem.css';

const CategoryItem = props => {
    return (
        
        <div className="card">
            <img src={props.img} />
            <div className="topic">
                <h1>{props.title}</h1>
            </div>
        </div>
    );
}

export default CategoryItem;