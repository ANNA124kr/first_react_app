// react function component


import React from 'react'
import Photo from '../images/header.jpg'


export default function Header(props) {
  return (
    <div>
        <img style={{width:'200px'}}src= {Photo} alt="logo" />
        <h1  style={{color:'violet'}}>Welcome to my App!!</h1>

        <button onClick={() =>{props.setPages(1)}}>GO to AddPost</button>
        <button onClick={() =>{props.setPages(2)}}>Go to PostList</button>
    
    
    </div>
    
  )
}
