import { IoIosArrowRoundBack } from "react-icons/io";
import { StyledNav } from "../styles/StyleNav";
import { MainContainer } from "../styles/StyleCarrinho";
import { InfoContainerPerfil, SobreVoce } from "../styles/StylePerfil";
import ManoX from '../assets/images/manox.png'
import { Link } from "react-router-dom";
import CardPerfil from "../components/CardPerfil";

const Perfil = () => {
  return (
    <>
      <StyledNav>
        <Link to={'/'}><IoIosArrowRoundBack fontSize={"3rem"} color={'black'}/></Link>
      </StyledNav>
      <MainContainer>
        <InfoContainerPerfil>
            <h1>Perfil</h1>
            <img src={ManoX} alt="Mano X" />
            <h2>Mano X</h2>
            <p>Membro desde Jul 2024</p>
            <p>São Paulo, Brasil</p>
        </InfoContainerPerfil>
        <SobreVoce>
            <h2>Sobre você</h2>
            <p>Entusiasta de esportes e amante de tecnologia, sempre em busca do melhor equipamento para otimizar seu desempenho. Aqui para encontrar e compartilhar as melhores ofertas e novidades!</p>
        </SobreVoce>
        <CardPerfil titulo={'Meus pedidos'} conteudo={'Últimos pedidos'}/>
      </MainContainer>
    </>
  );
};

export default Perfil;
