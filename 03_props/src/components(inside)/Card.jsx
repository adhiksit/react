import React from 'react'

const Card = (props) => {
    console.log(props.user)
  return (
    <div className="card">
            <h1>{props.user} {props.age}</h1>
            <img src = {props.img}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <button>Click me</button>
    </div>
  )
}

export default Card
