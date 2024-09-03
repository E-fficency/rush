import Footer from "../components/Footer";
import MenuBurger from "../components/MenuBurger";
import Nav from "../components/Nav";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <>
      <Nav />
      {/* <MenuBurger /> */}
      <ProductList />
      <Footer />
    </>
  );
}

export default Home;
