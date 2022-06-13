import { useState } from 'react';
import getImages from '../requests/getImages';
import '../styles/Search.css';

const Search = ({ setSearchResults }) => {
    const [value, setValue] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchResults(getImages(value));
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className='search-bar'
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                />
                <button className='search-button' type='submit'>Go!</button>
            </form>
        </>
    )
}

export default Search;