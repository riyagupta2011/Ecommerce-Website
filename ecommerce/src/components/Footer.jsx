import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
display:flex;
`;
const Left=styled.div`
flex:1;
`;
const Center=styled.div`
flex:1;
`;
const Right=styled.div`
flex:1;
`;
const Footer = () => {
  return (
    <Container>
      <Left></Left>
      <Center></Center>
      <Right></Right>
    </Container>
  )
}

export default Footer