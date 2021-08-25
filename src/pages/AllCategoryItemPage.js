import React from 'react'

import CategoryItemList from '../components/CategoryItems/CategoryItemList';

const DUMMY_ITEMS = [
    {
        id: 'p1',
        title: 'NadagamKarayo',
        description: "Nadagamkarayo is ...",
        imageURL: "https://i.ytimg.com/vi/63cO-8Yc9DU/maxresdefault.jpg",
        genre: "Action",
        ratings: 4.5,
        ratingCount: 5
    },

    {
        id: 'p1',
        title: 'Agosha',
        description: "Agoshais ...",
        imageURL: "https://i.ytimg.com/vi/63cO-8Yc9DU/maxresdefault.jpg",
        genre: "Crime",
        ratings: 4.2,
        ratingCount: 8
    }
];

const AllCategoryItems = () => {
    return <CategoryItemList items={DUMMY_ITEMS}/>
}

export default AllCategoryItems;