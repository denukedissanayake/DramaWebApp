import React from 'react'

import CategoryItem from './CategoryItem';

import './CategoriesList.css';

const CategoryList = props => {
    return (
        <div className="wrapper">
            <CategoryItem title="Movies" img ="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"/>
            <CategoryItem title="TeleDramas" img ="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/japan-lakes-cover.jpg"/>
            <CategoryItem title="Web Series" img ="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
            <CategoryItem title="Short Movies" img ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
            <CategoryItem title="Old Hits" img ="https://images.unsplash.com/photo-1572727984721-9e8bbd728f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"/>
        </div>
    )
 }

export default CategoryList;