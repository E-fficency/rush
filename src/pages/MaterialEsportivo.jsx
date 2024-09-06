import materialEsportivo from "../mocks/material-esportivo.jsx";
import ProductPage from "../components/ProductPage";
import Nav from "../components/Nav.jsx";
import HeaderProduct from "../components/HeaderProduct.jsx";

function MaterialEsportivo() {
  const produtosMaterialEsportivo = [...materialEsportivo, ...materialEsportivo, ...materialEsportivo];
  return(
    <>
      <Nav />
      <HeaderProduct titulo='Material esportivo' subtitulo='Chuteira, tênis entre outros'  />
      <ProductPage products={produtosMaterialEsportivo} />;
    </>
  ) 

}

export default MaterialEsportivo;
