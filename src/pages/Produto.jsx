import { useParams } from "react-router-dom";
import emAlta from "../mocks/alta.jsx";
import materialEsportivo from "../mocks/material-esportivo.jsx";
import ofertas from "../mocks/ofertas.jsx";
import NavProduct from "../components/NavProduct";
import { IoHeartOutline } from "react-icons/io5";
import Retangulo from "../assets/images/Rectangle.png"
import {
  MainProductDetails,
  ContainerProductDetails,
  StyledImg,
  ProductDetail,
  ProductButton,
  ContainerIcon,
  Gradient,
  AdicionarASacola,
  DropDownTamanho
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
                <DropDownTamanho>
                  <option value="">Tamanho</option>
                  <option value="P">PP</option>
                  <option value="P">P</option>
                  <option value="M">M</option>
                  <option value="G">G</option>
                  <option value="G">GG</option>
                </DropDownTamanho>
              <AdicionarASacola>Adicionar a sacola</AdicionarASacola>
            </ProductButton>
            <Gradient src={Retangulo} />
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
