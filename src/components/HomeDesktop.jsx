import { Link } from "react-router-dom";
import { Container, InfoProducts, Imagem, Infos, Button} from "../styles/StyleHomeDesktop.jsx";



function HomeDesktop({flex, justify='start', img, produto, titulo, descricao, rota}){
  return(
    <>
        <InfoProducts direction={flex}>
          <Imagem justify={justify}>
            <img src={img} alt=""></img>
          </Imagem>
          <Infos>
            <h4>{produto}</h4>
            <h2>{titulo}</h2>
            <h3>{descricao}</h3>
            <Link to={rota} style={{textDecoration: 'none'}}><Button>Compre agora</Button></Link>
          </Infos>
        </InfoProducts>
    </>
  )
}

export default HomeDesktop