import styled from 'styled-components'

export const Container = styled.input`
    color: ${({ theme}) => (theme.colors.text)};
    background: ${({theme}) => theme.colors.tertiaryBackground};
    box-sizing: border-box;
    letter-spacing: 1px;
    border-radius: 2px;
    font-weight: 400;
    cursor: pointer;
    padding: 0 30px;
    outline: none;
    width:  100%;
    border: none;
    height: 75px;

  @media (max-width: 678px) {
    font-size: 13px;
    height: 50px;
  }
`