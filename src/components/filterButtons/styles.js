import styled from 'styled-components'

export const ContainerButton = styled.div`
    color: ${({ theme, select, name }) => (select == name ? '#36D3DD' : theme.colors.secondaryText)};
    background: ${({theme}) => theme.colors.tertiaryBackground};
    text-transform: lowercase;
    justify-content: center;
    box-sizing: border-box;
    transition: ease .2s;
    letter-spacing: 1px;
    align-items: center;
    border-radius: 2px;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    width:  100%;
    height: 40px;


  &:hover{
    opacity: 80%;
  }

  @media (max-width: 678px) {
    font-size: 12px;
  }
`