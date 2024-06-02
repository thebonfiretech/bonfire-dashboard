import styled from 'styled-components'

export const Container = styled.div`
    background: ${({theme}) => theme.colors.secondaryBackground};
    color: ${({ theme}) => (theme.colors.secondaryText)};
    text-transform: lowercase;
    justify-content: center;
    box-sizing: border-box;
    letter-spacing: 2px;
    align-items: center;
    text-align: center;
    border-radius: 2px;
    display: flex;
    width:  100%;
    height: 114px;

  @media (max-width: 678px) {
    font-size: 10px;
    height: 67px;
  }
`

export const Results = styled.div`

    & h1{
      font-size: 32px;
      font-weight: 700;
    }

    & p{
      padding-top: 5px;
      font-weight: 400;
    }

    @media (max-width: 678px) {
      & h1{
        font-size: 18px;
      }

      & p{
       font-size: 11px;
      }
    }

`