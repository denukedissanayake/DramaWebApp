import React from 'react'

import './CategoryItemList.css'

import Card from '../UIElements/Card'
import CategoryItem from './CategoryItem'

const CategoryItemList = props => {

    if (props.items.length === 0) {
        return <div className='itemList-center'>
            <Card>
                <h2>
                    No Items Found for this Category!
                </h2>
            </Card>
        </div>
    }

    return <ul className="item-list">
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
    </ul>
}

export default CategoryItemList;