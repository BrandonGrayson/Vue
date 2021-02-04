// imported react, destructured componenent
import React, { Component } from "react"
// imported api
import { search } from "../utils/API"

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

        return (
            <div className='container'>
                <h1>This is where the employee data should go</h1>
            </div>
        ); 
    }
}

// export Employee Container
export default EmployeeContainer