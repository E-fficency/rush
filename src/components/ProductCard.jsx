import { Link } from "react-router-dom";
import {StyledInfo, StyledCard } from "../styles/StyleProduct";

function ProductCard({id, produto, preco, src }) {
  return (
    <Link to={`/produto/${id}`}>
      <StyledCard>
        <img src={src} alt={produto} />
        <StyledInfo>
          <h2>{produto}</h2>
          <p>R$ {preco}</p>
        </StyledInfo>
      </StyledCard>
    </Link>
  );
};

export default ProductCard;