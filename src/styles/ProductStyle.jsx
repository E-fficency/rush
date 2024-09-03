import styled from "styled-components";

export const StyledCard = styled.div`
  width: 200px;
  height: 300px;
  font-size: 0.78rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start;
  /* background-color: red; */
`

export const ContainerProducts = styled.div`
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  display: grid; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

`

export const MainProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  margin: 1rem 1rem;
  gap: 1.5rem;
`