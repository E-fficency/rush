import Titulo from "../components/Titulo";
import { StyledNav } from "../styles/Nav";
import { IoCloseOutline } from "react-icons/io5";
import {
  CardCarrinho,
  CardCarrinhoBottom,
  CardCarrinhoInfos,
  CarrinhoFooter,
  CarrinhoFooterInfos,
  FinalizarCompra,
  MainContainer,
} from "../styles/StyleCarrinho";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuBurger from "../components/MenuBurger";
import { StyledBackgroundMenuBurger } from "../styles/MenuBurger";
import { FaTrash } from "react-icons/fa6";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Carrinho = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [carrinho, setCarrinho] = useState([])

  useEffect(() => {
    const pegarCarrinho = () => {
      const car = localStorage.getItem("carrinho")
      if (car) {
        const carrinho = JSON.parse(car)
        setCarrinho(carrinho.map((item) => JSON.parse(item)))
      }
    }
    pegarCarrinho()
  }, [])

  const deletarItem = (itemId) => {
    carrinho.pop(itemId)
    const items = carrinho.map((item) => JSON.stringify(item))
    const novoCarrinho = JSON.stringify(items)
    localStorage.setItem("carrinho", novoCarrinho)
    toast.success('Produto deletado com sucesso!', {
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
      window.location.reload()
    }, 3000);
  }

  console.log(carrinho)

  return (
    <>
      <ToastContainer />
      <StyledNav>
        <FiMenu fontSize={"2rem"} onClick={() => setIsOpen(!isOpen)} />
        <Link to={'/'}><IoCloseOutline fontSize={"2.5rem"} color="black" /></Link>
        <MenuBurger isOpen={isOpen} />
        <StyledBackgroundMenuBurger
          onClick={() => setIsOpen(!isOpen)}
          style={{
            opacity: isOpen ? "1" : "0",
            visibility: isOpen ? "visible" : "hidden",
          }}
        />
      </StyledNav>
      <MainContainer>
        <Titulo>Carrinho</Titulo>

        {carrinho.length < 1 ? <>
          <p>Seu carrinho esta vazio</p>
        </> :
          carrinho.map((item, index) => {
            return (
              <CardCarrinho key={index++}>
                <div>
                  <img alt="Imagem do Produto" src={item.src} />
                </div>
                <CardCarrinhoInfos>
                  <h2>{item.produto}</h2>
                  <CardCarrinhoBottom>
                    <span>x1</span>
                    <p>{item.preco}</p>
                  </CardCarrinhoBottom>
                </CardCarrinhoInfos>
                <button style={{ position: "absolute", right: '1rem', border: "1px solid #d4d4d4", padding: '1rem', borderRadius: 5, background: "transparent", cursor: "pointer" }} onClick={() => deletarItem(item.id)}>
                  <FaTrash />
                </button>
              </CardCarrinho>
            )
          })
        }

      </MainContainer>
      <CarrinhoFooter>
        <CarrinhoFooterInfos>
          <h2>Total</h2>
          <p>R${carrinho.reduce((acc, item) => acc + item.preco, 0)}</p>
        </CarrinhoFooterInfos>
        <Link to={'/finalizarcompra'}><FinalizarCompra>Finalizar</FinalizarCompra></Link>
      </CarrinhoFooter>
    </>
  );
};

export default Carrinho;
