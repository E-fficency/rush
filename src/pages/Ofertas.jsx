import ofertas from "../mocks/ofertas.jsx";
import ProductPage from "../components/ProductPage";
import Nav from "../components/Nav.jsx";
import HeaderProduct from "../components/HeaderProduct.jsx";

function Ofertas() {
  const produtosOfertas = [...ofertas, ...ofertas, ...ofertas];
  return (
    <>
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
