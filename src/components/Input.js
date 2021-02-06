import React from 'react'

const Input = props => {

    const handleInputChange = () => {
        console.log( "They Made A CHANGE------>")
    } 
    return (
        <form className='mt-3 d-flex justify-content-center' id='input'>
            <label>
                <input type="text" onChange={props.handleInputChange}  placeholder='Search' name="name" />
            </label>
        </form>
    )
}


export default Input