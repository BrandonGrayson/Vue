// import react
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

// set up userCard component to return a div with necessary data
const UserCard = (props) => {
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Employee</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone #</th>
                    <th>Location</th>
                </tr>
            </thead>
        </table>
    )
}

export default UserCard