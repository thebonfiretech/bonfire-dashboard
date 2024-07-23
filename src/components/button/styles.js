import styled from 'styled-components'

export const ContainerButton = styled.button`
    background: ${({theme}) => theme.colors.gradient};
    color: ${({theme}) => theme.colors.text};
    text-transform: uppercase;
    box-sizing: border-box;
    transition: ease .2s;
    border-radius: 3px;
    letter-spacing: 1px;
    font-weight: 800;
    cursor: pointer;
    width:  300px;
    border: none;
    height: 40px;

  &:hover{
    opacity: 80%;
  }

  @media (max-width: 678px) {
    width: 205px;
    height: 38px;
  }
`