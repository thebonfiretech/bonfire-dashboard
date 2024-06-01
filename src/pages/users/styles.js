import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  width: auto;
`;

export const Box = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 75%;
  width: 75%;
  gap: 30px;

  @media (max-width: 678px) {
    width: 90%;
    padding-top: 50px;
  }

  & > section {
    justify-content: center;
    flex-direction: row;
    display: flex;
    width: 75%;
    gap: 15px;

    @media (max-width: 678px) {
      width: 100%;
    }
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
