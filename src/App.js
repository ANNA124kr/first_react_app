
import { useState } from 'react';
import './App.css';
import AddPost from './component/AddPost';
import Header from './component/Header';
import LisstPost from './component/LisstPost';



function App() {

// let posts = [ {userName: 'Anna' , msg: 'hi'},
//                 {userName: 'Yan' , msg: 'hello'}]

//arr
const [posts, setPosts] = useState([ {userName: 'Anna' , msg: 'hi'},
                                      {userName: 'Yan' , msg: 'hello'}])


//pages
const [pages,setPages] = useState(1)

const showPages =() =>{
  if (pages == 1) {
    return <AddPost addFunc ={addPostToArr} />
  }else if (pages == 2){
    return <LisstPost del = {delPost} postsArr = {posts} />
  }
}

  
  
    const addPostToArr = (n,m) => {

      setPosts([...posts, {userName:n, msg:m }])

    }

    const delPost = (i) => {
    let newArr = posts.filter((val,index) => (index != i))

    setPosts([...newArr])

    }
    
  return (
    <div className="App">
      
    <Header setPages = {setPages} />

    {showPages()}




    <hr />
    {/* <AddPost addFunc ={addPostToArr} /> */}
    {/* <hr /> */}
    {/* <LisstPost del = {delPost} postsArr = {posts} /> */}


    </div>
  );
}

export default App;

//i - index post

