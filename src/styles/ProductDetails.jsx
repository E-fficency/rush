import styled from "styled-components";

export const MainProductDetails = styled.div`
  padding: 0 1.4rem;
`;

export const ContainerProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.7rem;
  align-items: center;
  @media (min-width: 600px) {
    width: 40%;
  }
`;

export const StyledImg = styled.div`
  height: 500px;
  width: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-height: 300px;
  /* backdrop-filter: blur(70px); */
  z-index: 1;

  span {
    font-weight: 500;
    font-size: 1.25rem;
    color: #b02b2b;
  }
  h2 {
    font-size: 1rem;
    font-weight: 500;
  }
  p {
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const ProductButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const ContainerIcon = styled.div`
  color: #b02b2b;
  background-color: #ffff;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  border-radius: 100%;
  position: absolute;
  right: 0;
  bottom: 100%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  svg {
    font-size: 2rem;
  }
  transition: all 0.2s ease-out;
  &:hover {
    transform: translateY(2px);
  }
`;

export const Gradient = styled.div`
  background: linear-gradient(180deg, transparent, #ffffff);
    bottom: 100%;
    position: absolute;
    height: 30%;
    left: 0;
    width: 100%;
    z-index: -9;
`