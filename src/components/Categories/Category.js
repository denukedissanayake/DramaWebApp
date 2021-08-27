import React from 'react'
import { Link } from 'react-router-dom'

import './Category.css';

const CategoryItem = props => {
    return (
        
        <div className="card">
            <Link to={`/${props.id}/items`}>
                <img src={props.img} />
                <div className="topic">
                    <h1>{props.title}</h1>
                </div>
            </Link>
        </div>
    );
}

export default CategoryItem;