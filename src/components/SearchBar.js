/** @format */

import React from "react";

function SearchBar(props) {
	function handleSearch(event) {
		props.setSearch(event.target.value);
	}
	function cancel(event) {
		event.preventDefault();
		props.setSearch("")
	}
	return (
		<div className="d-none d-sm-block my-3">
			<form className="d-flex">
				<input
					className="form-control"
					placeholder="Search posts by location..." value={props.Search} onChange={handleSearch}></input>
				<button className="btn btn-warning" onClick={cancel}>Cancel</button>
			</form>
		</div>
	);
}

export default SearchBar;
