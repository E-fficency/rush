import { FiMenu } from "react-icons/fi";
import { StyledNav } from "../styles/Nav";
import { CiSearch } from "react-icons/ci";
import MenuBurger from "./MenuBurger";
import { useState } from "react";
import { StyledBackgroundMenuBurger } from "../styles/MenuBurger";
import Busca from "./Busca";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBuscaOpen, setIsBuscaOpen] = useState(false);
  return (
    <StyledNav>
      <FiMenu fontSize={"2em"} onClick={() => setIsOpen(!isOpen)} />
      <CiSearch fontSize={"2em"} onClick={() => setIsBuscaOpen(!isBuscaOpen)} />
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
