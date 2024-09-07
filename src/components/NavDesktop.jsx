import { ItemNavDesktop, StyledNavDesktop } from "../pages/StyleNavDesktop";
import logo from '../assets/images/logo-desktop.svg'
import { IoBagOutline, IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const NavDesktop = () => {
    return (  
        <StyledNavDesktop>
            <ItemNavDesktop>
                <img src={logo} alt="Logo" />
            </ItemNavDesktop>
            <ItemNavDesktop>
                <button>Lançamentos</button>
                <Link to={'/materialesportivo'}><button>Esportes</button></Link>
                <Link to={'/emalta'}><button>Tendencias</button></Link>
                <Link to={'/ofertas'}><button>Ofertas</button></Link>
            </ItemNavDesktop>
            <ItemNavDesktop>
                <Link to={'/pedidos'}><IoBagOutline size={25} color="black"/></Link>
                <Link to={'/listadedesejos'}><IoHeartOutline size={25} color="black"/></Link>
            </ItemNavDesktop>
        </StyledNavDesktop>
    );
}
 
export default NavDesktop;