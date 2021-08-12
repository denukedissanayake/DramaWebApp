import React from 'react'

import CategoryItem from './CategoryItem';

import './CategoriesList.css';

const CategoryList = props => {
    return (
        <div className="wrapper">
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem />
            <CategoryItem/>
            <CategoryItem/>
        </div>
    )
 }

export default CategoryList;