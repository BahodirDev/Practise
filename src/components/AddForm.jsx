import React, { useState } from 'react'

function AddForm({ addNewOne }) {
    // states
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    return (
        <div className="col-md-12">
            <input type="text" className='form-control p-3 mt-3' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" className='form-control p-3 mt-3' placeholder='Count' value={number} onChange={(e) => setNumber(e.target.value)} />
            <button className='btn btn-outline-warning mt-3' onClick={() => {
                addNewOne({ id: Date.now(), name, view: number });
                setNumber('')
                setName('')
            }}>Add</button>
        </div>
    )
}

export default AddForm
