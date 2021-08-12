import React from 'react'

function GroceryList({ groceryItems, onDelete, id }) {

    return (
        <div>
            <p className="center" style={{ border: "2px", borderStyle: "solid", borderColor: "black" }}>{groceryItems}
                <button style={{ height: "30px" }} onClick={() => onDelete(id)}>Delete Item</button>
            </p>
        </div>
    )
}

export default GroceryList
