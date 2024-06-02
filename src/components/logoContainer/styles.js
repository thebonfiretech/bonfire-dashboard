import styled from 'styled-components'

export const Container = styled.div`
    background-image: url('../public/images/logo.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-color: #000000;
    background-size: cover;
    border-radius: 50%;
    height: 120px;
    width: 120px;


  @media (max-width: 678px) {
    height: 90px;
    width: 90px;
  }
`
