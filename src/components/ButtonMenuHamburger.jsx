import { Link } from "react-router-dom";
import {
  StyledDivButton,
  StyledIcon,
  StyledNotification,
  StyledTitle,
} from "../styles/ButtonMenuHamburger";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function ButtonMenuHamburger({ title, icon, link }) {

  const [desejos, setDesejos] = useState(0)
  const [pedidos, setPedidos] = useState(0)

  useEffect(() => {
    const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos"))
    if (favoritosSalvos) {
      const tamanho = favoritosSalvos.length;
      setDesejos(tamanho);
    }

    const pedidosSalvos = JSON.parse(localStorage.getItem("carrinho"))
    if (pedidosSalvos) {
      const tamanho = pedidosSalvos.length
      setPedidos(tamanho)
    }
  }, [])

  return (
    <Link to={link} style={{ width: "100%" }}>
      <StyledDivButton>
        <StyledIcon>{icon}</StyledIcon>
        <StyledTitle>{title}</StyledTitle>

        {/* notificacao */}
        {title === "Lista de desejos" && desejos ? <StyledNotification>{desejos}</StyledNotification> : ""}
        {title === "Pedidos" && pedidos ? <StyledNotification>{desejos}</StyledNotification> : ""}

      </StyledDivButton>
    </Link>
  );
}

export default ButtonMenuHamburger;
