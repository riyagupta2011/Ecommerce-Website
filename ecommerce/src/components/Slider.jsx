import React from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Container=styled.div`
height:100vh;
width:100%;
display:flex;
background-color:coral;
position:relative;
`
const Arrow=styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
`
function Slider() {
  return (
    <Container>
        <Arrow>
            <ArrowLeftIcon/>
        </Arrow>
        <Arrow>
            <ArrowRightIcon />
        </Arrow>
    </Container>
  )
}

export default Slider