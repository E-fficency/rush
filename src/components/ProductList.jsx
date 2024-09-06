import ProductCard from "./ProductCard";
import { MainProduct, ContainerProducts, MainContainerProduct } from "../styles/StyleProduct.jsx";
import emAlta from "../mocks/alta.jsx";
import materialEsportivo from "../mocks/material-esportivo.jsx";
import ofertas from "../mocks/ofertas.jsx";
import Titulo from "./Titulo";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <>
      <MainContainerProduct>
        <MainProduct>
          <Link to={"/emalta"}>
            <Titulo>Novos lançamentos</Titulo>
          </Link>
          <ContainerProducts>
            {emAlta.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                produto={product.produto}
                preco={product.preco}
                src={product.src}
              />
            ))}
          </ContainerProducts>
        </MainProduct>

        <MainProduct>
        <Link to={"/materialesportivo"}>
          <Titulo>Material Esportivo</Titulo>
        </Link>
          <ContainerProducts>
            {materialEsportivo.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                produto={product.produto}
                preco={product.preco}
                src={product.src}
              />
            ))}
          </ContainerProducts>
        </MainProduct>

        <MainProduct>
        <Link to={"/ofertas"}>    
          <Titulo>Ofertas</Titulo>
        </Link>
          <ContainerProducts>
            {ofertas.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                produto={product.produto}
                preco={product.preco}
                src={product.src}
              />
            ))}
          </ContainerProducts>
        </MainProduct>
      </MainContainerProduct>
    </>
  );
};

export default ProductList;
