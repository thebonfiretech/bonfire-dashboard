import styled from "styled-components";

export const Container = styled.div`
  padding-left: ${({ justifyContent }) =>
  justifyContent == "space-between" ? "15px" : "0"};
  justify-content: ${({ justifyContent }) => justifyContent};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  height: 50px;
  width: 100%;

@media (max-width: 678px) {
  display: ${({active}) => active == false ? "none" : "flex"};
}
  &:hover {
  background-color: #404040;
  }
  
  & > span {
  justify-content: center;
  letter-spacing: 2px;
  align-items: center;
  display: flex;
  gap: 15px;
  }
`;

export const DropdownBox = styled.button`
  background-color: transparent;
  padding: 0 15px;
  cursor: pointer;
  height: 100%;
  border: none;
  width: auto;
  z-index: 2;
`;
