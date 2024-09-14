import React from 'react'
import Post from './Post'

export default function LisstPost(props) {
  return (
    <div>

{props.postsArr.map((val,index,arr)=> {
    return <Post del = {props.del} allData ={val} key={index} index = {index} />
})}


    </div>
  )
}
