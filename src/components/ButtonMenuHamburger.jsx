import {
  StyledDivButton,
  StyledIcon,
  StyledNotification,
  StyledTitle,
} from "../styles/ButtonMenuHamburger";

/* eslint-disable react/prop-types */
function ButtonMenuHamburger({ title, icon }) {
  return (
    <StyledDivButton>
      <StyledIcon>{icon}</StyledIcon>
      <StyledTitle>{title}</StyledTitle>

      {/* notificacao */}
      <StyledNotification>1</StyledNotification>
    </StyledDivButton>
  );
}

export default ButtonMenuHamburger;
