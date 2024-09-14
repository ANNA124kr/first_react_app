import React from 'react'

export default function Post(props) {
  return (
    <div>

    <h1 style={{color: 'green'}}> UserName: {props.allData.userName} </h1>
    <h3> msg:      {props.allData.msg} </h3>
    <button style={{color: 'red'}} onClick={() =>{props.del(props.index)}}> Delete</button>


    </div>
  )
}
