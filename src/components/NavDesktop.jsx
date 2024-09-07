import { ItemNavDesktop, StyledNavDesktop } from "../pages/StyleNavDesktop";
import logo from '../assets/images/logo-desktop.svg'
import { IoBagOutline, IoHeartOutline } from "react-icons/io5";


const NavDesktop = () => {
    return (  
        <StyledNavDesktop>
            <ItemNavDesktop>
                <img src={logo} alt="Logo" />
            </ItemNavDesktop>
            <ItemNavDesktop>
                <span>Lançamentos</span>
                <span>Esportes</span>
                <span>Tendencias</span>
                <span>Ofertas</span>
            </ItemNavDesktop>
            <ItemNavDesktop>
                <IoBagOutline size={25}/>
                <IoHeartOutline size={25}/>
            </ItemNavDesktop>
        </StyledNavDesktop>
    );
}
 
export default NavDesktop;