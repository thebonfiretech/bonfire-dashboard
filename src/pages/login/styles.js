import styled from 'styled-components'

export const Container = styled.div`
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    height: 100vh;
    width:  auto;

`

export const Box = styled.div`
     background: ${({theme}) => theme.colors.tertiaryBackground};
     justify-content: center;
     flex-direction: column;
     align-items: center;
     border-radius: 5px;
     display: flex;
     height: 80%;
     width: 60%;
     gap: 40px;

     @media (max-width: 678px) {
       width: 90%;
     }
`

export const InputContainer = styled.div`
    flex-direction: column;
    display: flex;
    width: 80%;
    gap: 20px;
 

 & span{
     letter-spacing: 1px;
     font-weight: 400;
     font-size: 11px;
     color: red;
 }

 & a{
     color: ${({theme}) => theme.colors.secondaryText};
     text-decoration: underline;
     cursor: pointer;
     letter-spacing: 1px;
     font-weight: 400;
     font-size: 11px;
 }

@media (max-width: 678px) {
   width: 90%;
 }
`
export const Message = styled.div`
justify-content: space-between;
 display: flex;
 width: 100%;
 `
