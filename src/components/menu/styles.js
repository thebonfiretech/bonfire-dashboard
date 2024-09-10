import styled from 'styled-components'

export const Container = styled.div`
transition: all .1s ease-in-out;
justify-content: space-between;
flex-direction: column;
align-items: center;
position: relative;
padding: 0 10px;
display: flex;
height: 100vh;

background: ${({theme}) => theme.colors.secondaryBackground};

& > section {
${({isOpen}) => isOpen ? 
`
width: 230px;
`
:
`
width: 60px;
display: grid;
place-items: center;
`}


`

export const Logout = styled.button`
${({isOpen}) => 
  isOpen ? 
  `

  padding-left: 15px;
  `
  : 
  `
  padding-left: 0;
  `
}

color: ${({theme}) => theme.colors.text};
transition: all .3s ease-in-out;
background-color: transparent;
justify-content: center;
align-items: center;
border-radius: 5px;
position: relative;
padding: 15px;
cursor: pointer;
display: flex;
height: 50px;
border: none;
bottom: 0%;
gap: 15px;
left: 0;


&:hover {
background-color: #404040;
}
`

export const OpenMenu = styled.div`
${({isOpen}) => isOpen ?
`
justify-content: space-between;
padding: 15px;
`
: 
`
justify-content: center;
padding: 15px 0;
`
}
border-bottom: 1px solid #EEEEEE;
box-sizing: border-box;
align-items: center;
cursor: pointer;
display: flex;
height: auto;
width: 100%;

& > div {
display: flex;
align-items: center;
gap: 15px;
}

& > h1 {
letter-spacing: 1px;
}
`