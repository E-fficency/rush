import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Container } from "../styles/HomeDesktop";
import ProductList from "../components/ProductList";
import HomeDesktop from "../components/HomeDesktop";
import homeData from '../mocks/homeData'

function Home() {
  return (
    <>
      <Nav />
      <ProductList />
      <Container>
        {homeData.map((home, index) => (
          <HomeDesktop
            key={index}
            flex={home.flex}
            justify={home.justify}
            img={home.img}
            produto={home.produto}
            titulo={home.titulo}
            descricao={home.descricao}
            rota={home.rota}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
