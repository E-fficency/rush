import ofertas from "../mocks/ofertas.jsx";
import ProductPage from "../components/ProductPage";
import Nav from "../components/Nav.jsx";
import HeaderProduct from "../components/HeaderProduct.jsx";
import { useEffect } from "react";
import NavDesktop from "../components/NavDesktop.jsx";

function Ofertas() {
  const produtosOfertas = [...ofertas, ...ofertas, ...ofertas];

  useEffect(() => {
    document.title = 'Rush | Ofertas'
  })
  return (
    <>
    <NavDesktop/>
      <Nav />
      <HeaderProduct
        titulo="Ofertas"
        subtitulo="Produtos em promoção"
      />
      <ProductPage products={produtosOfertas} />;
    </>
  );
}

export default Ofertas;
