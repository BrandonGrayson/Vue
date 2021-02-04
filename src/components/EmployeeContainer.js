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
    }

    render() {
        console.log('STATE-->', this.state)
        // set value of users variable to users array
        const users = this.state.users
        

        

        return (
            <div className='container'>
                <h1>This is where the employee data should go</h1>
            </div>
        ); 
    }
}

// export Employee Container
export default EmployeeContainer