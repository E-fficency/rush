import { FinalizarCompra } from "../styles/StyleCarrinho";
import { Footer, InfoCompra, StyledValor } from "../styles/FooterCompra";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function FooterCompra() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const pegarCarrinho = () => {
      const car = localStorage.getItem("carrinho")
      if (car) {
        const carrinho = JSON.parse(car)
        setCarrinho(carrinho.map((item) => JSON.parse(item)))
      }
    }
    pegarCarrinho()
  }, [])

  return (
    <Footer>
      <InfoCompra>
        <StyledValor>
          <h3>Taxa de envio</h3>
          <span>R$45,00</span>
        </StyledValor>
        <StyledValor>
          <h2>Total</h2>
          <span style={{ fontWeight: '700'}}>R${carrinho.reduce((acc, item) => acc + item.preco, 0)}</span> 
        </StyledValor>
      </InfoCompra>
      <Link style={{ width: '100%' }} to={'/pedidorealizado'}>
        <FinalizarCompra>Finalizar compra</FinalizarCompra>
      </Link>
    </Footer>
  );
}

export default FooterCompra;