import styled from 'styled-components'

export const Container = styled.div`
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    height: 100vh;
    width:  100%;

`

export const Box = styled.div`
     background: ${({theme}) => theme.colors.tertiaryBackground};
     justify-content: center;
     flex-direction: column;
     align-items: center;
     border-radius: 5px;
     display: flex;
     height: 75%;
     width: 60%;
     gap: 40px;

     @media (max-width: 678px) {
       width: 90%;
     }
`

export const SelectorContainer = styled.div`
         flex-direction: column;
         display: flex;
         width: 80%;
         gap: 20px;

         @media (max-width: 678px) {
            width: 90%;

             & Label{
                 font-size: 12px;
             }
          }
`
