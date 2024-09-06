import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Container } from "../styles/HomeDesktop";
import ProductList from "../components/ProductList";
import HomeDesktop from "../components/HomeDesktop";
import img1 from "../assets/images/home/img1.png"
import img2 from "../assets/images/home/img2.png"
import img3 from "../assets/images/home/img3.png"

const homeData = [
  {
    flex: "row",
    img: img1,
    produto: "Esportes",
    titulo: "Material esportivo",
    descricao: "Equipe-se com o melhor, seja o melhor",
    rota: "/materialesportivo",
  },
  {
    flex: "row-reverse",
    justify: "end",
    img: img2,
    produto: "Tendência",
    titulo: "Em alta",
    descricao: "Supere-se. Está em alta.",
    rota: "/emalta",
  },
  {
    flex: "row",
    img: img3,
    produto: "Ofertas",
    titulo: "Liquidação",
    descricao: "Equipe-se com o melhor",
    rota: "/ofertas",
  },
];

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
