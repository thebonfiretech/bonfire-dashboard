import styled from "styled-components";

export const Container = styled.div`
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
    height: 100vh;
    display: flex;
    width: 100%;
`;

export const Box = styled.div`
    text-align: center;
    border-radius: 5px;
    padding: 0 10%;

    & > h1 {
        letter-spacing: 4px;
        font-weight: 700;
        font-size: 110px;
    }

    @media (max-width: 678px) {
      padding: 0;
      & > h1 {
          font-size: 80px;
      }
     }
`;

export const Position1 = styled.div`
  transform: rotate(15deg);
  margin-left: 60%;
`;

export const Position2 = styled.div`
  transform: rotate(-33deg);
  margin-left: -20%;
`;

export const Position3 = styled.div`
  transform: rotate(-20deg);
  margin-left: 100%;
  margin-top: -85px;
  
  @media (max-width: 678px) {
    margin-left: 95%;
   }
`;

export const Message = styled.div`
 flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;

  & > p {
      letter-spacing: 1px;
      font-weight: 500;
      font-size: 20px;
      width: 100%;
  }

@media (max-width: 678px) {
   & > p {
       font-size: 18px;
   }
 }
  
`;

export const Icon = styled.div`
    border: solid 2px #fff;
    justify-content: center;
    border-radius: 10px;
    align-items: center;
    display: flex;
    height: 68px;
    width: 72px;

  @media (max-width: 678px) {
     height: 60px;
     width: 68px;
   }
`;
