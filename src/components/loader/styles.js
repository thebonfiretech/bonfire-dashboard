import styled from "styled-components";

export const Container = styled.div`
justify-content: center;
box-sizing: border-box;
align-items: center;
position: absolute;
height: 100vh;
display: flex;
width: 100vw;
left: 0;
top: 0;


background: ${({ theme }) => theme.colors.background};

& > div {
  animation: rotate 1s linear infinite;
  place-items: center;
  display: grid;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
}
`;
