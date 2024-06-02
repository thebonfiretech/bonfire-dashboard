import styled from 'styled-components'

export const Container = styled.div`
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    height: 100vh;
    width: 100%;
    gap: 20px;

`

export const NavContainer = styled.div`
    width: 75%;

    @media (max-width: 678px) {
      padding-top: 50px;
       width: 90%;
     }
`

export const Box = styled.div`
     justify-content: center;
     flex-direction: column;
     display: flex;
     height: 60%;
     width: 60%;
     gap: 20px;

     @media (max-width: 678px) {
       width: 90%;
     }
`

export const IndicatorsContainer = styled.div`
    flex-direction: row;
    display: flex;
    gap: 10px;
`

export const InputsContainer = styled.div`
    flex-direction: column;
    margin-top: 25px;
    display: flex;
    gap: 10px;
`

export const ButtonContainer = styled.div`
     justify-content: center;
     display: flex;
     width:  100%;
`