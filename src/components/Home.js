import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
  return (
   <Container>
    <Section title="Model s"
     description="order online for Touchless Delivery"
     backgroundImg="model-s.jpg"
     leftBtnText="custom order"
     rightBtnText="Existing inventory"/>
    <Section
    title="Model Y"
    description="order online for Touchless Delivery"
    backgroundImg="model-y.jpg"
    leftBtnText="custom order"
    rightBtnText="Existing inventory"/>
    <Section
    title="Model  3"
    description="order online for Touchless Delivery"
    backgroundImg="model-3.jpg"
    leftBtnText="custom order"
    rightBtnText="Existing inventory"/>
    <Section
    title="Model x"
    description="order online for Touchless Delivery"
    backgroundImg="model-x.jpg"
    leftBtnText="custom order"
    rightBtnText="Existing inventory"/>
    <Section
    title="Lowest Solar panels in America"
    description="Money-back guarantee"
    backgroundImg="solar-panel.jpg"
    leftBtnText="order-now"
    rightBtnText="Learn more"/>
    <Section
    title="Solar for New Roofs"
    description="Solw Roof Costs Less Than a New Roof Plus Solar Pannels"
    backgroundImg="solar-roof.jpg"
    leftBtnText="order-now"
    rightBtnText="Learn more"/>
     <Section
    title="Accessories"
    description=""
    backgroundImg="Accessories.jpg"
    leftBtnText="shop now"/>
    
   </Container>
  )
}

export default Home

const Container=styled.div`
height:100vh;
z-index:10;
`