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
           .then(res => 
            {
                console.log(res.data.results)
                this.setState({users:res.data.results})
            })  
    }

    mapUsers () {
        console.log('STATE-->', this.state)
        // set value of users variable to users array
        const users = this.state.users
        console.log('These Are the USERS--->', users)
        // iterate over the array of users
       
    }

    render() {
        return (         
               this.state.users ? (<UserCard
                    users= {this.state.users}
                />) : (<p></p>)
        ); 
    }
}

// export Employee Container
export default EmployeeContainer