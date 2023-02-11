import React from 'react'

function Info({ numberLike, numberView }) {
    return (
        <>
            <div className="col-md-6 text-center">
                <h3>Eng ko'p ko'rilganlar: {numberView.length}</h3>
                {/* <div className="d-flex justify-content-around p-3 bg-light"> */}
                {/* </div> */}
            </div>
            <div className="col-md-6 text-center ">
                {/* <div className="d-flex justify-content-around p-3 bg-light"> */}
                <h3>Eng ko'p like: {numberLike.length}</h3>
                {/* </div> */}
            </div>
        </>

    )
}

export default Info
