import {
  MainContainerPedidoRealizado,
  PedidoRealizadoParagrafo,
  PedidoRealizadoStyledNav,
  PedidoRealizadoTitulo,
  TopContainerPedidoRealizado,
} from "../styles/StylePedidoRealizado";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import check from "../assets/images/finalizar/check.svg";

const PedidoRealizado = () => {
  return (
    <>
      <PedidoRealizadoStyledNav>
        <Link to={"/"}>
          <IoArrowBackOutline fontSize={"2em"} color={"black"} />
        </Link>
      </PedidoRealizadoStyledNav>
      <MainContainerPedidoRealizado>

        <TopContainerPedidoRealizado>

          <img src={check} alt="" />

          <PedidoRealizadoTitulo>
            Pedido realizado com sucesso!
          </PedidoRealizadoTitulo>

          <PedidoRealizadoParagrafo>
            O pedido <b>24585</b> foi confirmado com sucesso e já enviamos a uma
            cópia do comprovante para seu email
          </PedidoRealizadoParagrafo>

        </TopContainerPedidoRealizado>

      </MainContainerPedidoRealizado>
    </>
  );
};

export default PedidoRealizado;
