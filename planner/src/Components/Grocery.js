import React, { useState } from 'react'

function Grocery() {
    const [grocery, setGrocery] = useState([])
    const [groceryInfo, setGroceryInfo] = useState("")
    function handleSubmit(e) {
        e.preventDefault();

    }
    return (
        <div>
            <form className="center">
                <input type="text" placeholder="Enter your grocery list" onChange={(e) => setGroceryInfo(e.target.value)}></input>
                <button onSubmit={handleSubmit}>Add</button>
            </form>
        </div>
    )
}

export default Grocery
