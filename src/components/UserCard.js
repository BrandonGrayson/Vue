// import react
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from "react-dom";
import EmployeeContainer from "./EmployeeContainer"

// set up userCard component to return a div with necessary data
const UserCard = (props) => {              
        let trs = [];
         props.users.map((el, index) => {
            console.log("This should be the USERS--->", props.users)
            console.log("This is an Mapped El--->", el)
            console.log("This is the INDEX--->", index)
            // destructure components needed
            const {street, city, state, country} = el.location
            // console.log(el.location)
            const email = el.email
            // console.log("This the Email-->", el.email)
            const { first, last } = el.name
            // console.log("This the name--->", el.name)
            const  phone  = el.phone
            // console.log('This is the phone number--->', el.phone)
            const { thumbnail } = el.picture
            // console.log("This is image thumbnail--->", el.picture)   
            trs.push(<tr key={index}>
                    <td> 
                        <img src={thumbnail}/> </td>
                        <td> {first} {last} </td>
                        <td>{email}</td>
                        <td> {phone}</td>
                        <td> </td>
                    </tr>
         );
        });
        
    console.log("This is Coming from Usercard--->", props)
    return(
        <table className='table mt-3'>
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone #</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                    {trs}
                    {/* <tr>{props.name.first}</tr> */}
            </tbody>
        </table>
    )
}

export default UserCard