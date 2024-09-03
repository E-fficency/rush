import { FiMenu } from "react-icons/fi";
import { StyledNav } from "../styles/Nav";
import { CiSearch } from "react-icons/ci";

function Nav() {
  return (
    <StyledNav>
      <FiMenu fontSize={"2em"} />
      <CiSearch fontSize={"2em"} />
    </StyledNav>
  );
}

export default Nav;
