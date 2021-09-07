import React from 'react'
import { useParams } from 'react-router';

import CategoryItemList from '../../components/CategoryItems/CategoryItemList';

const DUMMY_ITEMS = [
    {
        id: 'p1',
        title: 'NadagamKarayo',
        category: "teledrama",
        description: "The story of Sara and gang, a set of rowdies in the a village",
        imageURL: "https://i.ytimg.com/vi/63cO-8Yc9DU/maxresdefault.jpg",
        genre: "Action",
        ratings: 4.5,
        ratingCount: 5
    },

    {
        id: 'p2',
        title: 'Agosha',
        category: "webseries",
        description: "This is a story of a village boy who is trying to go abroad.",
        imageURL: "https://i.ytimg.com/vi/63cO-8Yc9DU/maxresdefault.jpg",
        genre: "Crime",
        ratings: 4.2,
        ratingCount: 8
    }
    ,

    {
        id: 'p3',
        title: 'Agosha',
        category: "webseries",
        description: "This is a story of a village boy who is trying to go abroad.",
        imageURL: "https://i.ytimg.com/vi/63cO-8Yc9DU/maxresdefault.jpg",
        genre: "Crime",
        ratings: 4.2,
        ratingCount: 8
    }
    ,

    {
        id: 'p4',
        title: 'Agosha',
        category: "webseries",
        description: "This is a story of a village boy who is trying to go abroad.",
        imageURL: "https://i.ytimg.com/vi/63cO-8Yc9DU/maxresdefault.jpg",
        genre: "Crime",
        ratings: 4.2,
        ratingCount: 8
    }
    ,

    {
        id: 'p5',
        title: 'Agosha',
        category: "teledrama",
        description: "This is a story of a village boy who is trying to go abroad.",
        imageURL: "https://i.ytimg.com/vi/63cO-8Yc9DU/maxresdefault.jpg",
        genre: "Crime",
        ratings: 4.2,
        ratingCount: 8
    }
    ,

    {
        id: 'p6',
        title: 'Agosha',
        category: "movie",
        description: "This is a story of a village boy who is trying to go abroad.",
        imageURL: "https://i.ytimg.com/vi/63cO-8Yc9DU/maxresdefault.jpg",
        genre: "Crime",
        ratings: 4.2,
        ratingCount: 8
    }
];

const AllCategoryItems = () => {

    const categoryParams = useParams().category;

    const loadedItems = DUMMY_ITEMS.filter(item => item.category === categoryParams);

    return (
        <CategoryItemList items={loadedItems}/>
    )
}

export default AllCategoryItems;