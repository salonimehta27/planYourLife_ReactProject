import React, { useState, useEffect } from 'react'
import GroceryList from './GroceryList'
import Search from './Search'

function Grocery() {
    const [grocery, setGrocery] = useState([])
    const [groceryInfo, setGroceryInfo] = useState("")
    const [searchGrocery, setSearchGrocery] = useState("")

    function handleFetchGrocery() {
        fetch(`http://localhost:3000/grocery`)
            .then(res => res.json()).
            then(data => setGrocery(data))
    }
    useEffect(() => {
        handleFetchGrocery()
    }, [])
    function handleDelete(id) {
        fetch(`http://localhost:3000/grocery/${id}`, {
            method: "Delete"
        })
        setGrocery(() => grocery.filter(i => i.id !== id))
    }
    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3000/grocery', {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "item": groceryInfo
            })
        })
            .then(res => res.json())
            .then(data => setGrocery([...grocery, data]))

        setGroceryInfo("")
    }
    // const searches = grocery

    function handleSearchGrocery(e) {
        setSearchGrocery(e.target.value)
    }
    const groceries = grocery.filter(x => x.item.toLowerCase().includes(searchGrocery.toLowerCase()))
        .map(l => <GroceryList key={l.id} groceryItems={l.item} id={l.id} onDelete={handleDelete}></GroceryList>)
    return (
        <div>
            <div>
                <form className="center" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your grocery list" value={groceryInfo} onChange={(e) => setGroceryInfo(e.target.value)}></input>
                    <button >Add</button>
                </form>
                <Search search={searchGrocery} onSearchChange={handleSearchGrocery} />
            </div>
            {groceries}
        </div>

    )
}

export default Grocery
