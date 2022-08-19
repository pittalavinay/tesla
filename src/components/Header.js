import React ,{useState}from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
const Header = () => {
  const[open,close]=useState(false);
  return (
    <Container>
      <a>
        <img src="logo.svg"></img>
      </a>
      <Menu>
<p><a href="#">Model s</a></p>
<p><a href="#">Model 3</a></p>
<p><a href="#">Model x</a></p>
<p><a href="#">Model y</a></p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      <CustomMenu onClick={()=>close(true)}>

      </CustomMenu>
      
      </RightMenu>
      <BurgerNav show={open}>
        <CloseWrapper>
        <CustomClose onClick={()=>close(false)}></CustomClose>
        </CloseWrapper>
        <li><a href="#">Existing inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">cybertruck</a></li>
        <li><a href="#">Roadmaster</a></li>
        <li><a href="#">Existing inventory</a></li>
        <li><a href="#">Existing inventory</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding:0 20px;
top:0;
left:0;
right:0;
justify-content:space-between;
z-index:1;
`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
p{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap:nowrap;
}
a{
  text-decoration:none;
}
@media(max-width:768px)
{
  display:none;
}
`
const RightMenu=styled.div`
display:flex;
align-items:center;
a{
  text-decoration:none;
  font-weight:600;
margin-right:10px;
flex-wrap:normal;
text-transform:uppercase;
}
`
const CustomMenu=styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
a{
  text-decoration:none;
  font-weight:600;
}
display:flex;
flex-direction:column;
text-align:start;
transform:${props=>props.show?'translateX(0)':'translatex(100%)'};
li
{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.2);
}
`
const CustomClose=styled(ClearIcon)`
cursor:pointer;
`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;

`
const burgerStatus=styled.div`

`