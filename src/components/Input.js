import React from 'react'

const Input = props => {
    return (
        <form className='mt-5 d-flex justify-content-center' id='input'>
            <label>
                <input type="text" placeholder='Search' name="name" />
            </label>
        </form>
    )
}


export default Input