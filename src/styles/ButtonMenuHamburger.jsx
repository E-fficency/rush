import styled from "styled-components";

export const StyledDivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1em;
  position: relative;
  width: 100%;
  border-radius: 5px;
  transition: all .3s ease-in;
  &:hover {
    background-color: #0000002d
  }
`;

export const StyledIcon = styled.button`
  border: 1px solid #000;
  border-radius: 2px;
  padding: 0.5em;
  font-size: 1.3em;
  background-color: transparent;
`;

export const StyledTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 400;
`;

export const StyledNotification = styled.div`
  background-color: #ff5252;
  color: #fff;
  width: 1.7em;
  height: 1.7em;
  display: grid;
  place-items: center;
  border-radius: 100%;
  position: absolute;
  right: 0;
`;
