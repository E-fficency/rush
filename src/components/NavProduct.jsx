import { StyledNav } from "../styles/Nav";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";

function Nav() {
  return (
    <StyledNav>
      <IoArrowBackOutline fontSize={"2em"}/>
      <IoBagOutline fontSize={"2em"}/>
    </StyledNav>
  );
}

export default Nav;
