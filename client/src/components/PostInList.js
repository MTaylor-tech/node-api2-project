import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Comment from './Comment'
import styled from 'styled-components'

const H = styled.h2`

`

const Post = styled.div`
  width: 41vw;
  border: 1px dotted darkgreen;
  border-radius: 10px;
  margin: 1vh 1vw;
  padding: 2vh 2vw;
  background: white;
`

const Text = styled.p`

`

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
`

const Button = styled.button`
  height: auto;
  font-size: 1rem;
  background: darkgreen;
  color: white;
  border-radius: 10px;
  border: 1px solid darkgreen;
`

export default function PostInList ({id, title, contents}) {
  const [expanded, setExpanded] = useState(false)
  const [comments, setComments] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:4001/api/posts/${id}/comments`)
      .then(res=>{
        setComments(res.data)
      })
      .catch(
        error => console.log(error)
      )
  },[id])

  return (
    <Post>
      <H>{title}</H>
      <Text>{contents}</Text>
      {!expanded&&comments.length>=1?<Button onClick={()=>setExpanded(true)}>Show Comments</Button>:<></>}
      {expanded&&comments.length>=1?<Button onClick={()=>setExpanded(false)}>Hide Comments</Button>:<></>}
      {expanded?<CommentBox>Comments: {comments.map(comment=>{return <Comment key={comment.id} id={comment.id} text={comment.text} />})}</CommentBox>:<></>}
    </Post>
  )
}
