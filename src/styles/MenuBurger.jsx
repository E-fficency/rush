import styled from "styled-components";

export const StyledMenuBurger = styled.menu`
  width: 80%;
  padding: 2em;
  padding-block: 5em;
  height: 100vh;
  position: fixed;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  background-color: #d9d9d9;
  z-index: 102;
  border-radius: 0 20px 20px 0;
`;

export const StyleProfileBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: start;
  gap: 1em;
`;

export const StyledImage = styled.img`
  width: 6rem;
  height: 6rem;
`;

export const StyledProfileName = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const StyledButtonProfile = styled.button`
  background-color: transparent;
  border: none;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.1rem;
  font-weight: 500;
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.7);
  display: block;
`;

export const StyledSeparatorButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1.5rem;
  width: 100%;
`;

export const StyledButtonSair = styled.button`
  background-color: transparent;
  border: none;
  color: #000000b7;
  font-size: 1.4rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1em;
  width: 100%;
`;

export const StyledBackgroundMenuBurger = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 102;
  top: 0;
  left: 0;
`;