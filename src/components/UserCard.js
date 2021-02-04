// import react
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from "react-dom";
import EmployeeContainer from "./EmployeeContainer"



// set up userCard component to return a div with necessary data
const UserCard = (props) => {
    console.log("This is Coming from Usercard--->", props)
    return(
        <table className='table mt-3'>
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
            <tbody>
                    <tr>{props.index}</tr>
                    {/* <tr>{props.name.first}</tr> */}
            </tbody>
        </table>
    )
}

export default UserCard