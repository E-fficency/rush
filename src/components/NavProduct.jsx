import { StyledNav } from "../styles/Nav";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <StyledNav>
      <Link to={'/'}><IoArrowBackOutline fontSize={"2em"} color={'black'}/></Link>
      <IoBagOutline fontSize={"2em"}/>
    </StyledNav>
  );
}

export default Nav;
