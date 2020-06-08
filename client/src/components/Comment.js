import React from 'react'
import styled from 'styled-components'

const P = styled.p`

`

export default function Comment ({id, text}) {

  return (
      <P>{text}</P>
  )
}
