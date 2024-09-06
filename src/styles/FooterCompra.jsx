import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 18dvh;
  align-items: center;
  justify-content: space-around;
  background-color: #F2F2F2;
  box-shadow: 0px 1px 18.1px 0px rgba(0, 0, 0, 0.13);
  position: fixed;
  z-index: 100;
  bottom: 0;
  gap: 1rem;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
`;

export const InfoCompra = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const StyledValor = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  h3{
    font-size: 1rem;
    font-weight: 300;
  }
  h2{
    font-size: 1.5rem;
    font-weight: 400;
  }
`;
