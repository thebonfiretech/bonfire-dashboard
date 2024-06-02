import styled from 'styled-components'

export const Container = styled.div`
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    height: 100vh;
    width:  auto;
    gap: 20px;

`

export const Box = styled.div`
     flex-direction: column;
     justify-content: center;
     display: flex;
     height: 75%;
     width: 60%;
     gap: 15px;

     @media (max-width: 678px) {
       width: 90%;
     }
`

export const IndicatorsContainer = styled.div`
    flex-direction: row;
    display: flex;
    gap: 10px;
`


export const ButtonContainer = styled.div`
     justify-content: center;
     display: flex;
     width:  100%;
`