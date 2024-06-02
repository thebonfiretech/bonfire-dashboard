import styled from 'styled-components'

export const Container = styled.div`
    color: ${({ theme}) => (theme.colors.text)};
    justify-content: space-between;
    text-transform: Capitalize;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 1px;
    font-weight: 400;
    display: flex;
    width:  100%;
    height: auto;


  @media (max-width: 678px) {
    font-size: 16px;
  }
`

export const Button = styled.button`
   background: transparent;
   cursor: pointer;
   border: none;
`