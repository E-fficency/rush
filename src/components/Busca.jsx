/* eslint-disable react/prop-types */
import { StyledNav } from "../styles/StyleNav";
import {
  Categories,
  Item,
  ItemName,
  ItemQtd,
  MainContainer,
  Search,
} from "../styles/StyleBusca";
import itensBusca from "../mocks/itensBusca";
import { IoCloseOutline } from "react-icons/io5";

const Busca = ({ isOpen, setIsOpen }) => {
  return (
    <div
      style={{
        transition: "all .3s ease-out",
        position: "fixed",
        top: 0,
        right: isOpen ? 0 : "-100%",
        zIndex: 999,
        background: "#fff",
        height: "100dvh",
        width: "100%",
      }}
    >
      <StyledNav>
        <IoCloseOutline fontSize={"2rem"} color="black" onClick={() => setIsOpen(!isOpen)} />
      </StyledNav>
      <MainContainer>
        <Search placeholder="O que procura?"></Search>
        <Categories>
          <Item>
            {itensBusca.map((produto, index) => (
              <ItemName key={index++}>
                <img alt="Imagem do Produto" src={produto.imagem} />
                <h2>{produto.nome}</h2>
                <ItemQtd>
                  <p>{produto.qtd}</p>
                </ItemQtd>
              </ItemName>
            ))}
          </Item>
        </Categories>
      </MainContainer>
    </div>
  );
};

export default Busca;
