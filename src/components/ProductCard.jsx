import products from '../mocks/produtos.json'
import { StyledCard } from "../styles/ProductStyle";

function ProductCard() {
  return (
    <>
    {products.map(produto => {
      <StyledCard>
        <img src={produto.src} alt={produto.produto} />
        <div>
          <h2>{produto.produto}</h2>
          <p>R$ {produto.preco}</p>
        </div>
      </StyledCard>
    }) }
    </>
  );
};

export default ProductCard;