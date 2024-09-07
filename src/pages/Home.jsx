import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Container, FirstSection } from "../styles/StyleHomeDesktop";
import ProductList from "../components/ProductList";
import HomeDesktop from "../components/HomeDesktop";
import homeData from "../mocks/homeData";
import { useEffect } from "react";
import FooterDesktop from "../components/FooterDesktop";
import NavDesktop from "../components/NavDesktop";
import swipe1 from "../assets/images/1.png";
import swipe2 from "../assets/images/3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
};

function Home() {
  useEffect(() => {
    document.title = "Rush | Home";
  });
  return (
    <>
      <NavDesktop />
      <Nav />
      <ProductList />
      <Container>
        <FirstSection>
          <div className="left">
            <h4>2023/2024</h4>
            <h1>NOVOS LANÇAMENTOS</h1>
            <h3>
              Encontre aqui os <span>novos lançamentos</span> do seu{" "}
              <span>time</span>
            </h3>
            <button className="explorar">Explorar mais</button>
          </div>
          <Carousel
            className="carousel"
            responsive={responsive}
            swipeable
            draggable
            showDots={false}
            infinite
            autoPlay
            autoPlaySpeed={5000}
            deviceType={responsive.desktop}
            arrows={false}
          >
            <img className="imagens-carousel" src={swipe1} />
            <img className="imagens-carousel" src={swipe2} />
          </Carousel>
        </FirstSection>
        <div
          style={{ backgroundColor: "#9f9b9b", height: "2px", width: "100%" }}
        ></div>
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
      <FooterDesktop />
      <Footer />
    </>
  );
}

export default Home;
