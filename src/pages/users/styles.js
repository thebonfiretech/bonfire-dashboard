import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  width: auto;
`;

export const Box = styled.div`
  flex-direction: column;
  display: flex;
  height: 60%;
  width: 75%;
  gap: 30px;

  @media (max-width: 678px) {
    width: 90%;
  }

  & > section {
    justify-content: center;
    flex-direction: row;
    display: flex;
    width: 100%;
    gap: 15px;
  }
`;

export const Items = styled.div`
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  height: 100%;
  height: 100%;
  width: 100%;
  gap: 15px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
