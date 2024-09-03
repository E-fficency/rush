import ProductCard from "./ProductCard";
import { ContainerProducts } from "../styles/ProductStyle";
import emAlta from "../mocks/alta.json";
import materialEsportivo from "../mocks/material-esportivo.json";
import ofertas from "../mocks/ofertas.json";

const ProductList = () => {
  return (
    <ContainerProducts>
      {emAlta.map((product) => (
        <ProductCard
          key={product.id}
          produto={product.produto}
          preco={product.preco}
          src={product.src}
        />
      ))}

      {materialEsportivo.map((product) => (
        <ProductCard
          key={product.id}
          produto={product.produto}
          preco={product.preco}
          src={product.src}
        />
      ))}

      {ofertas.map((product) => (
        <ProductCard
          key={product.id}
          produto={product.produto}
          preco={product.preco}
          src={product.src}
        />
      ))}
    </ContainerProducts>
  );
};

export default ProductList;
