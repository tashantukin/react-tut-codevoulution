import React, { Component } from 'react'

class EventBind extends Component
{
     constructor(props) {
         super(props)
     
         this.state = {
              message : 'Hello'
         }
         //binding in const
        //  this.clickHandler =  this.clickHandler.bind(this)
     }
     
    // clickHandler()
    // {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }
 //4th approach
    clickHandler = () =>
    {
        this.setState({
            message: 'Goodbye'
        })
    }
    render() {
        return (
            <div>
                <div>{ this.state.message }</div>
                <button onClick={ this.clickHandler }>Click</button>
            </div>
        )
    }
}

export default EventBind
