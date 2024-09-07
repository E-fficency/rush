import { ItemNavDesktop, StyledNavDesktop } from "../pages/StyleNavDesktop";
import logo from "../assets/images/logo-desktop.svg";
import { IoBagOutline, IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NavDesktop = () => {
  const [items, setItems] = useState(0);

  useEffect(() => {
    const pegarQuantidadeCarrinho = () => {
      const car = localStorage.getItem("carrinho");
      console.log(car);
      if (car) {
        const carrinho = JSON.parse(car);
        console.log(carrinho);
        console.log(carrinho.length);
        setItems(carrinho.length);
      }
    };
    pegarQuantidadeCarrinho();
  }, []);
  return (
    <StyledNavDesktop>
      <ItemNavDesktop>
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
      </ItemNavDesktop>
      <ItemNavDesktop>
        <button>Lançamentos</button>
        <Link to={"/materialesportivo"}>
          <button>Esportes</button>
        </Link>
        <Link to={"/emalta"}>
          <button>Tendencias</button>
        </Link>
        <Link to={"/ofertas"}>
          <button>Ofertas</button>
        </Link>
      </ItemNavDesktop>
      <ItemNavDesktop>
        <Link to={"/pedidos"}>
          <div style={{ position: "relative" }}>
            {items ? (
              <div
                style={{
                  width: "1rem",
                  height: "1rem",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "100%",
                  backgroundColor: "#df3e3e",
                  position: "absolute",
                  top: 0,
                  right: -5,
                  zIndex: 999,
                  color: "#fff",
                  fontSize: 12,
                }}
              >
                {items}
              </div>
            ) : (
              ""
            )}
            <IoBagOutline fontSize={"2em"} color={"black"} />
          </div>
        </Link>
        <Link to={"/listadedesejos"}>
          <IoHeartOutline size={25} color="black" />
        </Link>
      </ItemNavDesktop>
    </StyledNavDesktop>
  );
};

export default NavDesktop;
