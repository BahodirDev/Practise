import React, { useState } from 'react'

function Search({ handelSearch, setSearch, search }) {

    // states
    const [value, setValue] = useState('')
    
    return (
        <div className="col-md-12">
            <div className="p-4 ">
                <input type="text" className='form-control' value={search} onChange={(e) => {
                    setSearch(e.target.value);
                    setValue(e.target.value)
                }} placeholder="Qidiruv" />
            </div>
        </div>
    )
}

export default Search
