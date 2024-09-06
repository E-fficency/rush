import { Link } from "react-router-dom";
import { StyledNav } from "../styles/StyleNav";
import { IoArrowBackOutline } from "react-icons/io5";
import { useEffect } from "react";

const ListaDeDesejos = () => {

    useEffect(() => {
        document.title = 'Rush | Lista de desejos'
      })
    return (  
        <>
            <StyledNav>
               <Link to={'/'}><IoArrowBackOutline fontSize={"2em"} color={"black"} /></Link> 
            </StyledNav>
        </>
    );
}
 
export default ListaDeDesejos;