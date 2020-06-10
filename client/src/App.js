import React, {useEffect, useState} from 'react';
import axios from 'axios'
import PostInList from './components/PostInList'
import styled from 'styled-components'
import './App.css'

const PostBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: darkgreen;
`
const H = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
`
const AppDiv = styled.div`
  background: darkgreen;
  height: 100%;
  margin: 0;
  padding: 2vh 2vw;
`

function App() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:4001/api/posts')
      .then(res=>{
        setPosts(res.data)
      })
      .catch(error=>{
        console.log(error)
      })
  },[])

  return (
    <AppDiv className="App">
      <H>Posts</H>
      <PostBox>
        {posts.map(post=>{
          return <PostInList key={post.id} id={post.id} title={post.title} contents={post.contents} />
        })}
      </PostBox>
    </AppDiv>
  );
}

export default App;
