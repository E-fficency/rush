import { FinalizarCompra } from "../styles/StyleCarrinho";
import { Footer, InfoCompra, StyledValor } from "../styles/FooterCompra";
import { Link } from "react-router-dom";

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
      <Link style={{width: '100%'}} to={'/pedidorealizado'}><FinalizarCompra>Finalizar compra</FinalizarCompra></Link>
    </Footer>
  );
}

export default FooterCompra;
