import styled from 'styled-components'

export const Container = styled.div`
    background: ${({theme}) => theme.colors.secondaryBackground};
    color: ${({ theme}) => (theme.colors.secondaryText)};
    justify-content: space-between;
    text-transform: capitalize;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 1px;
    border-radius: 2px;
    padding: 15px;
    display: flex;
    width:  100%;
    height: 50px;

  @media (max-width: 678px) {
    font-size: 11px;
    height: 50px;
  }
`

export const UserInformation = styled.div`
     align-items: center;
     text-align: center;
     display: flex;
     gap: 15px;
`

export const ButtonIcon = styled.button`
      background: ${({theme}) => theme.colors.gradient};
      justify-content: center;
      align-items: center;
      border-radius: 2px;
      display: flex;
      height: 35px;
      border: none;
      width: 35px;
      
      @media (max-width: 678px) {
        height: 27px;
        width: 27px;
      }
    
`

export const Icon = styled.div`
       color: ${({ theme}) => (theme.colors.secondaryText)};
        font-size: 19px;

`

export const ControlPanel = styled.div`
      display: flex;
      gap: 15px;

`
export const Button = styled.button`
      background: transparent;
      cursor: pointer;
      border: none;
`
