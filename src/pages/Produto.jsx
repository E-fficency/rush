import { useParams } from "react-router-dom";
import emAlta from "../mocks/alta.jsx";
import materialEsportivo from "../mocks/material-esportivo.jsx";
import ofertas from "../mocks/ofertas.jsx";
import NavProduct from "../components/NavProduct";
import { IoHeartOutline } from "react-icons/io5";
import {
  MainProductDetails,
  ContainerProductDetails,
  StyledImg,
  ProductDetail,
  ProductButton,
  ContainerIcon
} from "../styles/ProductDetails";

const Produto = () => {
  const { id } = useParams();
  const allProducts = [...emAlta, ...materialEsportivo, ...ofertas];
  const product = allProducts.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Não encontrado</p>;
  }

  return (
    <>
      <NavProduct />
      <MainProductDetails>
        <ContainerProductDetails>
          <StyledImg>
            <img src={product.src} alt={product.produto} />
          </StyledImg>
          <ProductDetail>
            <span>R$ {product.preco}</span>
            <h2>{product.produto}</h2>
            <p>{product.descricao}</p>
            <ProductButton>
              <button>Tamanho</button>
              <button>Adicionar a sacola</button>
            </ProductButton>
            <ContainerIcon>
              <IoHeartOutline />     
            </ContainerIcon>
          </ProductDetail>
        </ContainerProductDetails>
      </MainProductDetails>
    </>
  );
};

export default Produto;
