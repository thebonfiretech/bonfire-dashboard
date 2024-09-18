import styled from 'styled-components'

export const Container = styled.div`
padding-left: 75px;
height: 100%;
width: 100%;
background-color: ${({theme}) => theme.colors.background};

@media (max-width: 678px) {
  padding-left: 0;
}
`