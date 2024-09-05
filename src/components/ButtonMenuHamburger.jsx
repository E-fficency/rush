import { Link } from "react-router-dom";
import {
  StyledDivButton,
  StyledIcon,
  StyledNotification,
  StyledTitle,
} from "../styles/ButtonMenuHamburger";

/* eslint-disable react/prop-types */
function ButtonMenuHamburger({ title, icon, link }) {
  return (
    <Link to={link} >
    <StyledDivButton>
      <StyledIcon>{icon}</StyledIcon>
      <StyledTitle>{title}</StyledTitle>

      {/* notificacao */}
      <StyledNotification>1</StyledNotification>
    </StyledDivButton>
    </Link>
  );
}

export default ButtonMenuHamburger;
