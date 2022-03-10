import React from "react"

function Search({ search, onSearchChange }) {
	return (
		<div>
			<input
				type="text"
				placeholder="Search"
				value={search}
				onChange={onSearchChange}
			></input>
		</div>
	)
}

export default Search
