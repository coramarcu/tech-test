import { useState } from 'react';

const Search = () => {
    const [value, setValue] = useState(0);

    return (
        <>
            <form>
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