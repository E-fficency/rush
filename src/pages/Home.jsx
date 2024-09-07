import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Container } from "../styles/StyleHomeDesktop";
import ProductList from "../components/ProductList";
import HomeDesktop from "../components/HomeDesktop";
import homeData from '../mocks/homeData'
import { useEffect } from "react";
import FooterDesktop from "../components/FooterDesktop";
import NavDesktop from "../components/NavDesktop";

function Home() {

  useEffect(() => {
    document.title = 'Rush | Home'
  })
  return (
    <>
    <NavDesktop/>
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
      <FooterDesktop/>
      <Footer />
    </>
  );
}

export default Home;
