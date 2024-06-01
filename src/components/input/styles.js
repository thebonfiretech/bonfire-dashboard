import styled from 'styled-components'

export const Container = styled.div`
background: ${({theme}) => theme.colors.secondaryBackground};
width: ${({width}) => width}vw;
border-radius: 2px;
position: relative;
display: flex;

@media (max-width: 678px) {
  width: 100%;
}
`

export const InputBox = styled.input`
color: ${({theme}) => theme.colors.text};
background-color: transparent;
padding: 16px 8px;
outline: none;
border: none;
width: 100%;

@media (max-width: 678px) {
  font-size: 12px;
}
`

export const IconBox = styled.div`
padding: 16px;
`