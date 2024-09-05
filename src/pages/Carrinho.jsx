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
import { Link } from "react-router-dom";

const Carrinho = () => {
  return (
    <>
      <StyledNav>
        <FiMenu fontSize={"2rem"} />
        <Link to={'/'}><IoCloseOutline fontSize={"2.5rem"} /></Link>
      </StyledNav>
      <MainContainer>
        <Titulo>Carrinho</Titulo>

        <CardCarrinho>
          <div>
            <img alt="Imagem do Produto" src={produtoImagem}/>
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
            <Link to={'/finalizarcompra'}><FinalizarCompra>Finalizar</FinalizarCompra></Link>

        </CarrinhoFooter>
    </>
  );
};

export default Carrinho;
