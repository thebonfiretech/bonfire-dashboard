import styled from 'styled-components'

export const Container = styled.div`
background-color: ${({theme}) => theme.colors.secondaryBackground};
width: ${({active}) => active == false ? "75px" : "250px"};
transition: all .3s ease-in-out;
justify-content: space-between;
z-index: 10;
flex-direction: column;
box-sizing: border-box;
align-items: center;
padding: 50px 10px;
position: fixed;
display: flex;
height: 100vh;
gap: 5px;

@media (max-width: 678px) {
  margin: ${({active}) => active == false ? "5%" : "0"};
  width: ${({active}) => active == false ? "50px" : "100vw"};
  height: ${({active}) => active == false ? "50px" : "100vh"};
  padding: ${({active}) => active == false ? "0" : "50px 10px"};
}
`

export const Logout = styled.button`
padding-left: ${({ justifyContent }) =>
justifyContent == "none" ? "15px" : "0"};
justify-content: ${({ justifyContent }) => justifyContent};
color: ${({theme}) => theme.colors.text};
transition: all .3s ease-in-out;
background-color: transparent;
align-items: center;
border-radius: 5px;
cursor: pointer;
display: flex;
height: 50px;
border: none;
width: 100%;
gap: 15px;

@media (max-width: 678px) {
  display: ${({active}) => active == false ? "none" : "flex"};
}
&:hover {
background-color: #404040;
}
`

export const MobileMenu = styled.button`
  display: none; 
  

  height: 50px;
  width: 50px;
  justify-content: center;
  background: transparent;
  align-items: center;
  outline: none;
  display: flex;
  border: none;

`