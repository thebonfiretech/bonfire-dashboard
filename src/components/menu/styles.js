import styled from 'styled-components'

export const Container = styled.div`
background-color: ${({theme}) => theme.colors.secondaryBackground};
width: ${({active}) => active == false ? "75px" : "250px"};
transition: all .3s ease-in-out;
flex-direction: column;
align-items: center;
padding: 10px 10px;
position: fixed;
display: flex;
height: 100vh;
gap: 5px;
`
