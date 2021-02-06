import React from 'react'

const Input = props => {

    const handleInputChange = (event) => {
        console.log( "They Made A CHANGE------>", event.nativeEvent.data)
    } 
    return (
        <form className='mt-3 d-flex justify-content-center' id='input'>
            <label>
                <input type="text" onChange={handleInputChange}  placeholder='Search' name="name" />
            </label>
        </form>
    )
}


export default Input