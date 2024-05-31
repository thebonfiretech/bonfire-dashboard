import styled from 'styled-components'

export const Container = styled.div`
background-color: ${({theme}) => theme.colors.secondaryBackground};
width: ${({active}) => active == false ? "75px" : "250px"};
transition: all .3s ease-in-out;
flex-direction: column;
box-sizing: border-box;
align-items: center;
justify-content: space-between;
padding: 50px 10px;
position: fixed;
display: flex;
height: 100vh;
gap: 5px;
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

&:hover {
background-color: #404040;
}
`