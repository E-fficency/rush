import styled from "styled-components";

export const StyledCard = styled.div`
  width: 170px;
  height: 300px;
  font-size: 0.78rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start;

`

export const ContainerProducts = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;
  flex-wrap: wrap;  
  margin: auto;
  gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr); 
    gap: 3rem;
  }
`

export const MainProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  gap: 1.5rem;
  a{
    text-decoration: none;
    color: #000;
  }
  @media (min-width: 600px) {
   display: none;
  }
`

export const MainProductDetailsHome = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  gap: 1.5rem;
  a{
    text-decoration: none;
    color: #000;
  }
`



export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: flex-end;
  height: 30%;
  h2{
    font-size: 1rem;
    font-weight: 500;
    height: 50%;
  }
  p{
    font-size: 1rem;
    color: #B02B2B;
  }
`

export const MainContainerProduct = styled.main`
  margin-bottom: 4rem;
`