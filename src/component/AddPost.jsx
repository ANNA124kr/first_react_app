import React, {useState} from 'react'

export default function AddPost(props) {


const [userName,setUserName] = useState('');
const [msg,setMsg]           = useState('');




  return (

    <div>
    <input onChange={ (e)=>{setUserName(e.target.value)} } type="text" placeholder='UserName' /> <br />
    <input onChange={ (e)=>{setMsg(e.target.value)}}       type="text" placeholder='msg' />      <br />

    <button onClick={ ()=>{props.addFunc(userName,msg)} } style={{backgroundColor: 'violet'}} >+</button>


    </div>
  )
}

//e - element
//!input - must hook (useState)
//useState - function
