// imported react, destructured componenent
import React, { Component } from "react"
import UserCard from './UserCard'
// imported api
import { search } from "../utils/API"
import 'bootstrap/dist/css/bootstrap.min.css'

// create 
class EmployeeContainer extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
        
    }
    // when this component mounts search the random users api
    componentDidMount() {
        console.log("Prepare to be Mounted")
        search()
            .then(res => this.setState({
                users:res.data.results
            }))
            // .then(this.mapUsers())
            // console.log('Users have been updated---->' )
    }

    mapUsers () {
        console.log('STATE-->', this.state)
        // set value of users variable to users array
        const users = this.state.users
        // console.log(users)
        // iterate over the array of users
        const newUsers = users.map((el, index) => {
            console.log("This should be the USERS--->", users)
            console.log("This is an Mapped El--->", el)
            // destructure components needed
            const {street, city, state, country} = el.location
            // console.log(el.location)
            const {email} = el.email
            // console.log("This the Email-->", el.email)
            const { name } = el.name
            // console.log("This the name--->", el.name)
            const { phone } = el.phone
            // console.log('This is the phone number--->', el.phone)
            const { thumbnail } = el.picture
            // console.log("This is image thumbnail--->", el.picture)             
        })
    }

    render() {
        return (
            // <table className='table'>
            //     <h1>This is where the employee data should go</h1>
            // </table>
                
                <UserCard
                    
                />
        ); 
    }
}

// export Employee Container
export default EmployeeContainer