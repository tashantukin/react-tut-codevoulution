 import React, { Component } from 'react'

const Greet = (props) =>
{
    const {name, heroName} = props
  //  console.log(props);
    return (
        <div>
            <h1>Hello { name } a.k.a { heroName } </h1>
           
        </div>
    )
}
 

export default Greet; 