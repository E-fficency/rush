import { useEffect, useState } from "react";
import { StyledNav } from "../styles/Nav";
import { IoArrowBackOutline, IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Nav() {
  const [items, setItems] = useState(0)

  useEffect(() => {
    const pegarQuantidadeCarrinho = () => {
      const car = localStorage.getItem("carrinho");
      console.log(car)
      if (car) {
        const carrinho = JSON.parse(car)
        console.log(carrinho)
        console.log(carrinho.length)
        setItems(carrinho.length)
      }
    }
    pegarQuantidadeCarrinho()
  }, [])

  return (
    <StyledNav>
      <Link to={'/'}><IoArrowBackOutline fontSize={"2em"} color={'black'} /></Link>
      <Link to={'/pedidos'}><div style={{ position: "relative" }}>{items ? <div style={{ width: "1rem", height: "1rem", display: "grid", placeItems: "center", borderRadius: "100%", backgroundColor: "#df3e3e", position: "absolute", top: 0, right: -5, zIndex: 999, color: "#fff", fontSize: 12 }}>{items}</div> : ""}<IoBagOutline fontSize={"2em"} color={'black'} /></div></Link>
    </StyledNav>
  );
}

export default Nav;
