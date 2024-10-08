/* eslint-disable react/prop-types */
import { BiExit } from "react-icons/bi";
import {
  Separator,
  StyledButtonProfile,
  StyledButtonSair,
  StyledImage,
  StyledMenuBurger,
  StyledProfileName,
  StyledSeparatorButtons,
  StyleProfileBlock,
} from "../styles/StyleMenuBurguer";
import ButtonMenuHamburger from "./ButtonMenuHamburger";
import profile from "../assets/images/manox.png";
import { botoes } from "../mocks/burgerbuttons";
import { Link } from "react-router-dom";

function MenuBurger({ isOpen }) {
  return (
      <StyledMenuBurger style={{left: isOpen ? "0" : "-100%"}}>
        <StyleProfileBlock>
          <StyledImage src={profile} alt="" />
          <div>
            <StyledProfileName>Mano X</StyledProfileName>
            <Link to={'/perfil'}><StyledButtonProfile>Ver perfil</StyledButtonProfile> </Link>
          </div>
        </StyleProfileBlock>
        <Separator>&nbsp;</Separator>
        <StyledSeparatorButtons>
          {botoes.map((botao, index) => (
            <ButtonMenuHamburger
              title={botao.title}
              icon={botao.icon}
              link={botao.link}
              key={index++}
            />
          ))}
        </StyledSeparatorButtons>
        <StyledButtonSair>
          <BiExit />
          <p>Sair da conta</p>
        </StyledButtonSair>
      </StyledMenuBurger>
  );
}

export default MenuBurger;
