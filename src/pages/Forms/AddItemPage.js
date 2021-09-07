import React, { useState } from 'react';
import ItemFromPage from './AddItemFormPage';
import ActorFromPage from './AddActorFormPage'

import './AddItemPage.css'

const AddItemPage = () => {

    const [form, setFrom] = useState('Item');

    const changeFormHandler = outputForm => {
        if (outputForm === "Item") {
            setFrom("Item");
            console.log("Item")
        } else {
            setFrom("Actor");
            console.log("Actor")
        }
    }

    return (
        <React.Fragment>
            <div className="form-control">
                <button className={form === 'Item' ? "active" : ""} onClick={changeFormHandler.bind(this, "Item")}>Add Item</button>
                <button className={form === 'Actor' ? "active" : ""}  onClick={changeFormHandler.bind(this, "Actor")}>Add Actor</button>
            </div>
            <div>
                {form === "Item" ? <ItemFromPage/> : <ActorFromPage/>}
            </div>
        </React.Fragment>
    )
}

export default AddItemPage;