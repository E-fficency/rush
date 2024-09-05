import { FinalizarCompra } from "../styles/StyleCarrinho";
import { Footer, InfoCompra, StyledValor } from "../styles/FooterCompra";

function FooterCompra() {
  return (
    <Footer>
      <InfoCompra>
        <StyledValor>
          <h3>Taxa de envio</h3>
          <span>R$45,00</span>
        </StyledValor>
        <StyledValor>
          <h2>Total</h2>
          <span>R$999,00</span>
        </StyledValor>
      </InfoCompra>
      <FinalizarCompra>Finalizar compra</FinalizarCompra>
    </Footer>
  );
}

export default FooterCompra;
