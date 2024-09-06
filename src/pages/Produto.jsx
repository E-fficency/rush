import { useParams } from "react-router-dom";
import emAlta from "../mocks/alta.jsx";
import materialEsportivo from "../mocks/material-esportivo.jsx";
import ofertas from "../mocks/ofertas.jsx";
import NavProduct from "../components/NavProduct";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import Retangulo from "../assets/images/Rectangle.png";
import {
  MainProductDetails,
  ContainerProductDetails,
  StyledImg,
  ProductDetail,
  ProductButton,
  ContainerIcon,
  Gradient,
  AdicionarASacola,
  DropDownTamanho,
} from "../styles/ProductDetails";
import { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Produto = () => {
  const { id } = useParams();
  const allProducts = [...emAlta, ...materialEsportivo, ...ofertas];
  const [product, setProduct] = useState(
    allProducts.find((item) => item.id === parseInt(id))
  );

  const [favoritos, setFavoritos] = useState([]);

useEffect(() => {
  const favoritosSalvos = localStorage.getItem("favoritos");
  if (favoritosSalvos) {
    setFavoritos(JSON.parse(favoritosSalvos));
  }
}, []);

const salvarNoLocalStorage = (novosFavoritos) => {
  localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
};

const toggleFavorito = (id, nome, src) => {
  let novosFavoritos;
  
  const itemExiste = favoritos.some((fav) => fav.id === id);
  if (itemExiste) {
    novosFavoritos = favoritos.filter((fav) => fav.id !== id);
  } else {
    novosFavoritos = [...favoritos, { id, nome, src }];
  }

  setFavoritos(novosFavoritos);
  salvarNoLocalStorage(novosFavoritos);
};

  const isFavorito = favoritos.some((fav) => fav.id === id);

  if (!product) {
    return <p>Não encontrado</p>;
  }

  const AdicionarAoCarrinho = () => {
    const carrinho = localStorage.getItem("carrinho");
    const lista = carrinho ? JSON.parse(carrinho) : [];
    lista.push(JSON.stringify(product));
    localStorage.setItem("carrinho", JSON.stringify(lista));
    toast.success("Produto adicionado ao carrinho!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <ToastContainer />
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
              <DropDownTamanho
                onChange={(e) =>
                  setProduct((prev) => ({ ...prev, tamanho: e.target.value }))
                }
              >
                <option value="">Tamanho</option>
                <option value="PP">PP</option>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="GG">GG</option>
              </DropDownTamanho>
              <AdicionarASacola onClick={AdicionarAoCarrinho}>
                Adicionar a sacola
              </AdicionarASacola>
            </ProductButton>
            <Gradient src={Retangulo} />
            <ContainerIcon onClick={() => toggleFavorito(id, product.produto, product.src)}>
              {/* <IoHeartOutline /> */}
              {/* <IoHeartSharp /> */}
              {isFavorito ? <IoHeartSharp/> : <IoHeartOutline/>}

            </ContainerIcon>
          </ProductDetail>
        </ContainerProductDetails>
      </MainProductDetails>
    </>
  );
};

export default Produto;
