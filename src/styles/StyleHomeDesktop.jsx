import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 1.4rem;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const InfoProducts = styled.div`
  border-bottom: 2px solid #9f9b9b;
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  gap: 2rem;
  flex-direction: ${(props) => `${props.direction}`};
`;

export const Infos = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  gap: 0.5rem;
  h2 {
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 500;
  }
  h3 {
    font-size: 2rem;
    font-weight: 500;
  }
  h4 {
    font-size: 1.5rem;
    opacity: 80%;
    font-weight: 500;
  }
`;

export const Button = styled.div`
  padding: 0.5rem;
  margin-top: 1rem;
  color: #fff;
  background-color: #0077e5;
  width: fit-content;
  border-radius: 20px;
  text-decoration: none;
`;

export const Imagem = styled.div`
  width: 50%;
  background-color: aliceblue;
  height: 30%;
  border-radius: 10px;
  display: flex;
  justify-content: ${(props) => `${props.justify}`};
  img {
    min-width: 100%;
    border-radius: 20px;
  }
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  height: 40dvh;
  .left {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1.5rem;
    width: 60%;
  }
  .carousel {
    width: 40%;
  }
  .imagens-carousel {
    width: 100%;
    height: 40dvh;
    object-fit: contain;
  }
  h1 {
    font-weight: 500;
    font-size: 4rem;
  }
  h3 {
    font-size: 2rem;
    font-weight: 500;
  }
  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    opacity: 80%;
  }
  span {
    color: #0077e5;
  }
  .explorar {
    padding: 0.5rem;
    color: #000;
    background-color: transparent;
    width: fit-content;
    border-radius: 20px;
    text-decoration: none;
    border: 1px solid #000000d4;
    cursor: pointer;
    transition: all 0.3s linear;
    &:hover {
      background-color: #0077e5;
      border: 1px solid #0077e5;
      color: white;
    }
  }
  .separator {
    background-color: #d4d4d4;
    height: 2px;
    width: 100%;
  }
`;
