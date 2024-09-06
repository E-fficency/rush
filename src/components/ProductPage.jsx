import ProductCard from "../components/ProductCard.jsx";
import Footer from "../components/Footer";
import {
  MainProductDetailsHome,
  ContainerProducts,
} from "../styles/StyleProduct.jsx";

function ProductPage({ products }) {
  return (
    <>
      <MainProductDetailsHome>
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
      </MainProductDetailsHome>
      <Footer />
    </>
  );
}

export default ProductPage;
