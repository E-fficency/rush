import styled from "styled-components"
import {StyledNav} from "../styles/StyleNav"
import filter from "../assets/images/filter.svg"

const ContainerInfo = styled.div`
    h1{
      font-size: 1.5rem;
      font-weight: 500;
    }
    h2{
      font-size: 1rem;
      font-weight: 500;
      opacity: 80%;
    }
`

function HeaderProduct({ titulo, subtitulo }) {
  return (
    <>
      <StyledNav>
        <ContainerInfo>
          <h1>{titulo}</h1>
          <h2>{subtitulo}</h2>
        </ContainerInfo>
        <img src={filter} />
      </StyledNav>
    </>
  );
}

export default HeaderProduct;
