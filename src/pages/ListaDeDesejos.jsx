import { Link } from "react-router-dom";
import { StyledNav } from "../styles/Nav";
import { IoArrowBackOutline } from "react-icons/io5";

const ListaDeDesejos = () => {
    return (  
        <>
            <StyledNav>
               <Link to={'/'}><IoArrowBackOutline fontSize={"2em"} color={"black"} /></Link> 
            </StyledNav>
        </>
    );
}
 
export default ListaDeDesejos;