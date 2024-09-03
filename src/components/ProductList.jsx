import ProductCard from "./ProductCard";
import { ContainerProducts } from "../styles/ProductStyle";
import products from '../mocks/produtos.json';

const ProductList = () => {
  return (
    <ContainerProducts>
      {products.map((product) => (
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
