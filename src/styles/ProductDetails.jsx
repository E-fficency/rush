import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";


export const MainProductDetails = styled.div`
  /* padding: 0 1.4rem; */
  @media (min-width: 600px) {
    padding: 0 3rem;
  }
`;

export const ContainerProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  @media (min-width: 600px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const StyledImg = styled.div`
  height: 60vh;
  width: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    padding: 0 1.2rem;
  }
  @media (min-width: 600px) {
    height: 80vh;
  }
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-height: 300px;
  z-index: 1;
  padding: 0 1.5rem;
  /* backdrop-filter: blur(70px); */
  span {
    font-weight: 600;
    font-size: 1.25rem;
    color: #b02b2b;
    margin-top: 1rem;
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

export const AdicionarASacola = styled.button`
  align-items: center;
  background-color: black;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 500;
`


export const DropDownTamanho = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  align-items: center;
  padding: 1rem;
  padding-right: 2.3rem;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 500;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlsaW5lIHBvaW50cz0iMyA2IDggMTEgMTMgNiIvPjwvc3ZnPg=='); 
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 15px; 
`

export const ProductButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.3rem;
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
  right: 5%;
  bottom: 90%;
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

export const Gradient = styled.img`
  /* background: linear-gradient(180deg, transparent, #ffffff); */
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: -9;
  user-select: none;
  -webkit-user-select: none; 
  -moz-user-select: none;    
  -ms-user-select: none;
  @media (min-width: 600px) {
    display: none;
  }
`;