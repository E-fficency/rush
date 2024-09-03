import Titulo from "../components/Titulo";
import { StyledNav } from "../styles/Nav";
import { IoCloseOutline } from "react-icons/io5";
import {
  CardCarrinho,
  CardCarrinhoBottom,
  CardCarrinhoInfos,
  CarrinhoFooter,
  CarrinhoFooterInfos,
  FinalizarCompra,
  MainContainer,
} from "../styles/StyleCarrinho";
import produtoImagem from "../assets/images/produtos/camisa-nike-inter-de-milao.svg";
import { FiMenu } from "react-icons/fi";

const Carrinho = () => {
  return (
    <>
      <StyledNav>
        <FiMenu fontSize={"2rem"} />
        <IoCloseOutline fontSize={"2.5rem"} />
      </StyledNav>
      <MainContainer>
        <Titulo>Carrinho</Titulo>

        <CardCarrinho>
          <div>
            <img src={produtoImagem}/>
          </div>
          <CardCarrinhoInfos>
            <h2>Camiseta Nike Dri-FIT Strike Liverpool Masculina</h2>
            <CardCarrinhoBottom>
              <span>x1</span>
              <p>459,00</p>
            </CardCarrinhoBottom>
          </CardCarrinhoInfos>
        </CardCarrinho>

      </MainContainer>
        <CarrinhoFooter>
            <CarrinhoFooterInfos>
                <h2>Total</h2>
                <p>R$999,99</p>
            </CarrinhoFooterInfos>
            <FinalizarCompra>Finalizar</FinalizarCompra>

        </CarrinhoFooter>
    </>
  );
};

export default Carrinho;
