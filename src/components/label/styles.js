import styled from 'styled-components'

export const Container = styled.label`
    color: ${({ theme}) => (theme.colors.secondaryText)};
    letter-spacing: 2px;
    font-weight: 400;

  &:first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 678px) {
    font-size: 13px;
  }
`