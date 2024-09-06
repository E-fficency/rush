import ProductCard from "../components/ProductCard.jsx";
import Footer from "../components/Footer";
import {
  MainProduct,
  ContainerProducts,
} from "../styles/ProductStyle";

function ProductPage({ products }) {
  return (
    <>
      <MainProduct>
        <ContainerProducts>
          {products.map((product) => (
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
      <Footer />
    </>
  );
}

export default ProductPage;
