import styled from 'styled-components';

export const Container = styled.div`
padding: 0 ${({justifyContent}) => justifyContent == "space-between" ? "15px" : "0"};
justify-content: ${({justifyContent}) => justifyContent};
color: ${({theme}) => theme.colors.text};
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
  display: flex;
  gap: 10px;
}

&:hover {  
background-color: #404040;
}
`