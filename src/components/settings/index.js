import React from 'react'
import styled from 'styled-components'
import General from './general'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    padding:1rem;
`
const Category = styled.div`
    width:100%;
    height:100%;
    margin-top:0.5rem;
     
`
const Title = styled.div`
    border-bottom: 1px solid black;
`

const Settings = () => (
  <Container>
    <Category>
      <Title>General</Title>
      <General />
    </Category>
  </Container>
)

export default Settings
