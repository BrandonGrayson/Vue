import React from 'react'

const Input = props => {
    return (
        <div className="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"> </input>
        </div>
    )
}

export default Input