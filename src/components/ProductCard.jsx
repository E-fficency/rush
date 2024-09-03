
import {StyledInfo, StyledCard } from "../styles/ProductStyle";

function ProductCard({ produto, preco, src }) {
  return (
    <>
      <StyledCard>
        <img src={src} alt={produto} />
        <StyledInfo>
          <h2>{produto}</h2>
          <p>R$ {preco}</p>
        </StyledInfo>
      </StyledCard>
    </>
  );
};

export default ProductCard;