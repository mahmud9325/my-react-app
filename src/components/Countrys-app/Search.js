import React, { useEffect, useState } from 'react'

function Search(props) {

    const [searchText, setSearchText] = useState("");


    const handleinputChange = (e) => {
       setSearchText(e.target.value);

    }

    useEffect(() => {
       props.onSearch(searchText);
    }, [searchText]);

    return (
        <div style={{ textAlign: 'center' }}>
            <input type="text" placeholder='Search the Data' value={searchText} onChange={handleinputChange} />
        </div>
    )
}

export default Search