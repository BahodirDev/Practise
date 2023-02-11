import React, { useState } from 'react'

function Filter({ setFilter, filter }) {
    const [btns, setBtns] = useState([
        { id: 1, name: "All", value: "All" },
        { id: 1, name: "Sevimli", value: "like" },
        { id: 1, name: "Most View", value: "popular" },
    ])
    return (
        <div className="col-md-12">
            <div className="d-flex justify-content-between">
                {
                    btns?.map((s) => {
                        return <button className={s.value == filter ? "btn btn-dark" : "btn btn-outline-dark"} onClick={() => setFilter(s.value)}>{s.name}</button>
                    })
                }
            </div>
        </div>
    )
}

export default Filter
