import styled from 'styled-components';

export const Container = styled.div`
padding-left: ${({justifyContent}) => justifyContent == "space-between" ? "40px" : "0"};
justify-content: ${({justifyContent}) => justifyContent};
color: ${({theme}) => theme.colors.secondaryText};
transition: all .3s ease-in-out;
box-sizing: border-box;
align-items: center;
border-radius: 2px;
cursor: pointer;
display: flex;
height: 50px;
width: 100%;

& > span {
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  display: flex;
  gap: 15px;
}

&:hover {  
background-color: #404040;
}
`

