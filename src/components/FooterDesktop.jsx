import { StyledFooterDesktop } from "../styles/FooterDesktop";
import logo from '../assets/images/logo-desktop.svg'

const FooterDesktop = () => {
    return (  
        <StyledFooterDesktop>
            <img src={logo} alt="Logo" />
            <h5>@2024 Todos os direitos reservados</h5>
        </StyledFooterDesktop>
    );
}
 
export default FooterDesktop;