import styled from 'styled-components'

export const Container = styled.div`
    background-color: #000000;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: ${({height}) => height ? height : "120px"};
    width: ${({width}) => width ? width : "120px"};

    & > img {
    height: 100%;
    width: 100%;
    
    }


  @media (max-width: 678px) {
    height: ${({height}) => height ? height : "90px"};
    width: ${({width}) => width ? width : "90px"};
  }
`
