import React, { Component } from 'react'

class UserGreeting extends Component
{
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render()
    {

       return  this.state.isLoggedIn && <div>Welcome Tash</div>
        // //element approach
        // let message
        // if (this.state.isLoggiIn) {
        //     message =  <div>Welcome Tash</div>
        // } else {
        //     message =  <div>Welcome Guest</div>
        // } 
        // return <div>{message}</div>

        // if (this.state.isLoggiIn) {
        //     return (
        //         <div>Welcome Tash</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Tash</div> :
        //         <div>Welcome Guest</div>
        // )
    }
}

export default UserGreeting
