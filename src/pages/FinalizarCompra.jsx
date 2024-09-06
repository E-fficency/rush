import NavProduct from "../components/NavProduct";
import InputRadio from "../components/InputRadio";
import TituloFinalizarCompra from "../components/TituloFinalizarCompra";
import SvgCupom from "../assets/images/finalizar/cupom.svg";
import plus from "../assets/images/finalizar/plus.svg";
import seta from "../assets/images/finalizar/seta.svg";
import {
  ContainerInput,
  Inputs,
  StyledDivIcon,
} from "../styles/FinalizarCompra";
import FooterCompra from "../components/FooterCompra";
import { useEffect } from "react";

function FinalizarCompra() {

  useEffect(() => {
    document.title = 'Rush | Finalizar compra'
  })
  return (
    <>
      <NavProduct />
      <ContainerInput>
        <Inputs>
          <TituloFinalizarCompra>Método de pagamento</TituloFinalizarCompra>
          <InputRadio label={"Pagamentos no pix"} id={"pix"} />
          <InputRadio label={"Apple Pay"} id={"apple"} />
          <InputRadio label={"Cartão Débito ou Crédito"} id={"cartao"} />
        </Inputs>
        <Inputs>
          <TituloFinalizarCompra>Endereço de entrega</TituloFinalizarCompra>
          <StyledDivIcon bg={seta} position={96} size={"20px"}>
            Endereço principal
          </StyledDivIcon>
          <StyledDivIcon bg={plus} position={96} size={"20px"}>
            Adicionar novo endereço
          </StyledDivIcon>
        </Inputs>
        <Inputs>
          <TituloFinalizarCompra>Cupom</TituloFinalizarCompra>
          <StyledDivIcon bg={SvgCupom} position={100} size={"contain"}>
            <input type="text" placeholder="Insira o cupom"></input>
          </StyledDivIcon>
        </Inputs>
      </ContainerInput>
    
      <FooterCompra />
    </>
  );
}

export default FinalizarCompra;
