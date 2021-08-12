import React from 'react'

import CategoryList from '../components/CategoriesList';

import "./CategoriesPage.css";

const CategoriesPage = () => {
    return (
        <React.Fragment>
            <div className="heding-topic">
                <h1>Here What You Love</h1>
                <h2>All in One Place</h2>
            </div>
            <CategoryList/>

        </React.Fragment>
        
    ) ;
}

export default CategoriesPage;