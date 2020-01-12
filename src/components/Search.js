import React from 'react';

const Search = props => {
    const handleChange = evt => {
        props.handleChange(evt.target.value)
    }
    return (
        <div className="search_containter">
            <label className="search-label" htmlFor="inputSearch">introduce tu búsqueda</label>
            <input onChange={handleChange} type="text" ></input>
        </div>
    );
}

export default Search;