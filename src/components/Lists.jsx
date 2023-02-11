import React from 'react'

function Lists({ massiv, changeLike, deleteHandler }) {
    return (
        <div className="col-md-12 place">
            {
                massiv?.map((value, idx) => {
                    let style = `fa-sharp ${value.isLike ? `fa-solid ` : `fa-regular `}fa-star mx-2 pointer`
                    return (
                        <div className='p-3 mt-2 bg-warning d-flex justify-content-between align-items-center '>
                            <p className='text-mute'>{value?.name}</p>
                            <div>
                                <div className='text-center'>
                                    <p className='text-dark'>{value?.view}</p>
                                </div>
                                <div className='p-2 bg-light '>
                                    <i class={style} onClick={() => changeLike(value?.id)}></i>
                                    <i class="fa-sharp fa-regular fa-trash-can mx-2 pointer" onClick={() => deleteHandler(value.id)}></i>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Lists
