import styled from 'styled-components';

export const Container = styled.div`
${({active}) => 
  active ? 
  `
  justify-content: space-between;
  padding-left: 40px;
  display: flex;
  `
  : 
  `
  display: none;
  `
}
color: ${({theme}) => theme.colors.secondaryText};
transition: all .3s ease-in-out;
box-sizing: border-box;
align-items: center;
border-radius: 2px;
cursor: pointer;
height: 50px;
width: 100%;

& > span {
  justify-content: center;
  align-items: center;
  letter-spacing: 1.5px;
  display: flex;
  font-size: 16px;
  gap: 15px;
}

&:hover {  
background-color: #404040;
}
`

