import { Link } from "react-router-dom";
import { StyledNav } from "../styles/StyleNav";
import { IoArrowBackOutline, IoHeartSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import {
  ItemInfos,
  ItemListaDeDesejos,
  MainContainerListaDeDesejos,
  TituloListaDesejos,
} from "../styles/StyleListaDeDesejos";

const ListaDeDesejos = () => {
  const [favoritos, setFavoritos] = useState([]);
  useEffect(() => {
    const pegarFavoritos = localStorage.getItem("favoritos");
    if (pegarFavoritos) {
      setFavoritos(JSON.parse(pegarFavoritos));
    }
    document.title = "Rush | Lista de desejos";
  }, []);

  return (
    <>
      <StyledNav>
        <Link to={"/"}>
          <IoArrowBackOutline fontSize={"2em"} color={"black"} />
        </Link>
      </StyledNav>
      <MainContainerListaDeDesejos>
        <TituloListaDesejos>Lista de desejos</TituloListaDesejos>
        <ItemListaDeDesejos>
          {favoritos.map((item) => (
            <ItemInfos>
              <div>
                <img src={item.src} />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}> 
                <h2>{item.nome}</h2>
                <IoHeartSharp color="red" size={25} />
              </div>
            </ItemInfos>
          ))}
        </ItemListaDeDesejos>
      </MainContainerListaDeDesejos>
    </>
  );
};

export default ListaDeDesejos;
