import ProductCard from "./ProductCard";
import { MainProduct, ContainerProducts } from "../styles/ProductStyle";
import emAlta from "../mocks/alta.jsx";
import materialEsportivo from "../mocks/material-esportivo.json";
import ofertas from "../mocks/ofertas.json";
import Titulo from "./Titulo";
import {Link} from 'react-router-dom'

const ProductList = () => {
  return (
    <>
      <MainProduct>
       <Link to={'/emalta'}><Titulo>Novos lançamentos</Titulo></Link>
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
        <Titulo>Em alta</Titulo>
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
        <Titulo>Material esportivo</Titulo>
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

    </>
  );
};

export default ProductList;