import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 90vh;
  box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.2);
`;

export const StyledDivButtonsFooter = styled.div`
  width: 95%;
  height: 80%;
  background-color: #d9d9d930;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 50px;
`;

export const StyledButtonFooter = styled.button`
  background-color: #0000002d;
  color: #fff;
  font-size: 100%;
  border-radius: 50px;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center;
  transition: all 0.2s ease-out;
  cursor: pointer;
  &:hover {
    opacity: 60%;
  }
  &:active {
    transform: translateY(2px);
  }
`;
