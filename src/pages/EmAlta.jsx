import emAlta from "../mocks/alta.jsx";
import ProductPage from "../components/ProductPage";
import HeaderProduct from "../components/HeaderProduct.jsx";
import Nav from "../components/Nav.jsx";
import { useEffect } from "react";

function EmAlta() {

  useEffect(() => {
    document.title = 'Rush | Em alta'
  })
  const produtosEmAlta = [...emAlta, ...emAlta, ...emAlta];
  return (
    <>
      <Nav/>
      <HeaderProduct titulo='Em alta' subtitulo='Novidades' />
      <ProductPage products={produtosEmAlta} />
    </>
  );
}

export default EmAlta;
