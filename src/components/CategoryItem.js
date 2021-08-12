import React from 'react'

import './CategoryItem.css';

const CategoryItem = props => {
    return (
        
        <div className="card">
            <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" />
            <div className="topic">
                <h1>Title</h1>
            </div>
        </div>
    );
}

export default CategoryItem;