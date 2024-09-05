import { StyledNav } from "../styles/Nav";
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

const Busca = () => {
  return (
    <>
      <StyledNav>
        <IoCloseOutline fontSize={'2rem'} color='black'/>
      </StyledNav>
      <MainContainer>
        <Search placeholder="O que procura?"></Search>
        <Categories>
          <Item>
            {itensBusca.map((produto) => (
              <ItemName>
                <img src={produto.imagem} />
                <h2>{produto.nome}</h2>
                <ItemQtd>
                    <p>{produto.qtd}</p> 
                </ItemQtd>
              </ItemName>
            ))}

          </Item>
        </Categories>
      </MainContainer>
    </>
  );
};

export default Busca;
