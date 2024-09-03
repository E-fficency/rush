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
} from "../styles/MenuBurger";
import ButtonMenuHamburger from "./ButtonMenuHamburger";
import profile from "../assets/images/manox.png";
import { botoes } from "../mocks/burgerbuttons";

function MenuBurger({ isOpen }) {
  return (
      <StyledMenuBurger style={{left: isOpen ? "0" : "-100%"}}>
        <StyleProfileBlock>
          <StyledImage src={profile} alt="" />
          <div>
            <StyledProfileName>Mano X</StyledProfileName>
            <StyledButtonProfile>Ver perfil</StyledButtonProfile>
          </div>
        </StyleProfileBlock>
        <Separator>&nbsp;</Separator>
        <StyledSeparatorButtons>
          {botoes.map((botao, index) => (
            <ButtonMenuHamburger
              title={botao.title}
              icon={botao.icon}
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
