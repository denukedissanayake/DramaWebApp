import React from 'react'

import './CategoryItemList.css'

import CategoryItem from './CategoryItem'

const CategoryItemList = props => {

    if (props.items.length === 0) {
        return <div className='itemList-center'>
            <div>
                <h2 className="no-item">
                    No Items Found for this Category!
                </h2>
            </div>
        </div>
    }

    return (
        // <ul className="item-list">
        // </ul>
        <div className="item-list">
            {props.items.map(item => (
            <CategoryItem
                key={item.id}
                id={item.id}
                image={item.imageURL}
                title={item.title}
                description={item.description}
                genre={item.genre}
                ratings={item.ratings}
                ratingCount={item.ratingCount}
            />
        ))}
        </div>
    )
}

export default CategoryItemList;