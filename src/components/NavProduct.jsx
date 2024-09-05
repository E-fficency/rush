import { StyledNav } from "../styles/Nav";
import { IoArrowBackOutline, IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <StyledNav>
      <Link to={'/'}><IoArrowBackOutline fontSize={"2em"} color={'black'}/></Link>
      <Link to={'/pedidos'}><IoBagOutline fontSize={"2em"} color={'black'}/></Link>
    </StyledNav>
  );
}

export default Nav;
