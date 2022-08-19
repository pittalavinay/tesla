import React from 'react'
import styled from 'styled-components'

const Section = ({title,description,leftBtnText,rightBtnText,backgroundImg}) => {
  return (
    <div>
      <Wrap bgImage={backgroundImg}>
        <Itemtext>
            <h1>{title}</h1>
            <p>{description}</p>
        </Itemtext>
        <Buttons>
        <ButtonGroup>
   <LeftButton>
      {leftBtnText}
   </LeftButton>
   {rightBtnText &&
   
   <RightButton>
   {rightBtnText}
    </RightButton>}
        </ButtonGroup>
       <DownArrow src="/downarrow.svg"/>
       </Buttons>
      </Wrap>
    </div>
  )
}

export default Section

const Wrap=styled.div`
z-index:10;
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url("model-s.jpg");
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props=>`url("/${props.bgImage}")`}
`
const Itemtext=styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
justify-content:space-between;
@media (max-width:768px){
  flex-direction:column;
}
`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`
const RightButton=styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`
const DownArrow=styled.img`
height:40px;
margin-left:250px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
@media (max-width:768px){
  margin-right:100px;
}
`
const Buttons=styled.div`

`