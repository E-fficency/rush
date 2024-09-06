import { AiOutlineInfo } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { RiMessage3Fill } from "react-icons/ri";
import {
  StyledButtonFooter,
  StyledDivButtonsFooter,
  StyledFooter,
} from "../styles/StyleFooter";

function Footer() {
  return (
    <StyledFooter>
      <StyledDivButtonsFooter>
        <StyledButtonFooter>
          <FaUser />
        </StyledButtonFooter>
        <StyledButtonFooter>
          <FaSearch />
        </StyledButtonFooter>
        <StyledButtonFooter>
          <FaCartShopping />
        </StyledButtonFooter>
        <StyledButtonFooter>
          <RiMessage3Fill />
        </StyledButtonFooter>
        <StyledButtonFooter>
          <AiOutlineInfo />
        </StyledButtonFooter>
      </StyledDivButtonsFooter>
    </StyledFooter>
  );
}

export default Footer;
