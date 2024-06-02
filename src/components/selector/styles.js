import styled from 'styled-components'

  export const Container = styled.select`
      color: ${({ theme}) => (theme.colors.text)};
      background: ${({theme}) => theme.colors.secondaryBackground};
      text-transform: Capitalize;
      box-sizing: border-box;
      transition: ease .3s;
      letter-spacing: 1px;
      border-radius: 2px;
      font-weight: 400;
      cursor: pointer;
      padding: 0 7px;
      width:  100%;
      outline: none;
      border: none;
      height: 50px;


    @media (max-width: 678px) {
      font-size: 13px;
      height: 50px;
    }
  `