import styled from "styled-components";

export const Container = styled.div`
  ${({active}) => 
    active ? 
    `
    justify-content: space-between;
    padding-left: 15px;
    `
    : 
    `justify-content: center;
    padding-left: 0;
    `
  }

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
}
  &:hover {
  background-color: #404040;
  }
  
  & > span {
  justify-content: center;
  letter-spacing: 1.5px;
  align-items: center;
  display: flex;
  font-size: 16px;
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
