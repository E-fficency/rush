import ProductCard from "./ProductCard";
import {
  MainProduct,
  ContainerProducts,
  MainContainerProduct,
} from "../styles/StyleProduct.jsx";
import emAlta from "../mocks/alta.jsx";
import materialEsportivo from "../mocks/material-esportivo.jsx";
import ofertas from "../mocks/ofertas.jsx";
import Titulo from "./Titulo";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const ProductList = () => {
  return (
    <>
      <MainContainerProduct>
        <MainProduct>
          <Link to={"/emalta"}>
            <Titulo>Novos lançamentos</Titulo>
          </Link>
          <Carousel
            responsive={responsive}
            showDots={false}
            swipeable
            draggable
            infinite
            removeArrowOnDeviceType={["mobile", "desktop"]}
            deviceType={responsive.deviceType}
            autoPlay
            autoPlaySpeed={4000}
          >
            {emAlta.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                produto={product.produto}
                preco={product.preco}
                src={product.src}
              />
            ))}
          </Carousel>
        </MainProduct>

        <MainProduct>
          <Link to={"/materialesportivo"}>
            <Titulo>Material Esportivo</Titulo>
          </Link>
          <Carousel
            responsive={responsive}
            showDots={false}
            swipeable
            draggable
            infinite
            removeArrowOnDeviceType={["mobile", "desktop"]}
            deviceType={responsive.deviceType}
            autoPlay
            autoPlaySpeed={4000}
          >
            {materialEsportivo.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                produto={product.produto}
                preco={product.preco}
                src={product.src}
              />
            ))}
          </Carousel>
        </MainProduct>

        <MainProduct>
          <Link to={"/ofertas"}>
            <Titulo>Ofertas</Titulo>
          </Link>
          <Carousel
            responsive={responsive}
            showDots={false}
            swipeable
            draggable
            infinite
            removeArrowOnDeviceType={["mobile", "desktop"]}
            deviceType={responsive.deviceType}
            autoPlay
            autoPlaySpeed={4000}
          >
            {ofertas.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                produto={product.produto}
                preco={product.preco}
                src={product.src}
              />
            ))}
          </Carousel>
        </MainProduct>
      </MainContainerProduct>
    </>
  );
};

export default ProductList;
