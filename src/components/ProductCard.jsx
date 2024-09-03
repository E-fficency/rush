
import { StyledCard } from "../styles/ProductStyle";

function ProductCard({ produto, preco, src }) {
  return (
    <>
      <StyledCard>
        <img src={src} alt={produto} />
        <div>
          <h2>{produto}</h2>
          <p>R$ {preco}</p>
        </div>
      </StyledCard>
    </>
  );
};

export default ProductCard;