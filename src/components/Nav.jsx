import { FiMenu } from "react-icons/fi";
import { StyledNav } from "../styles/StyleNav";
import { CiSearch } from "react-icons/ci";
import MenuBurger from "./MenuBurger";
import { useState } from "react";
import { StyledBackgroundMenuBurger } from "../styles/StyleMenuBurguer";
import Busca from "./Busca";
import logo from '../assets/images/logo-mobile.svg'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBuscaOpen, setIsBuscaOpen] = useState(false);
  return (
    <StyledNav>
      <FiMenu fontSize={"2em"} style={{ cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)} />
      <img src={logo} alt="" />
      <CiSearch fontSize={"2em"} style={{ cursor: "pointer" }} onClick={() => setIsBuscaOpen(!isBuscaOpen)} />
      <MenuBurger isOpen={isOpen} />
      <Busca isOpen={isBuscaOpen} setIsOpen={setIsBuscaOpen} />
      <StyledBackgroundMenuBurger
        onClick={() => setIsOpen(!isOpen)}
        style={{
          opacity: isOpen ? "1" : "0",
          visibility: isOpen ? "visible" : "hidden",
        }}
      />
    </StyledNav>
  );
}

export default Nav;
