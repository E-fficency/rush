import ProductCard from "../components/ProductCard.jsx";
import Footer from "../components/Footer";
import {
  MainProductDetailsHome,
  ContainerProducts,
} from "../styles/StyleProduct.jsx";
import { Separator } from "../styles/StyleMenuBurguer.jsx";

const cores = {
  azul: {
    cor: "#0000ff",
    titulo: "Azul",
  },
  verde: {
    cor: "#00ff00",
    titulo: "Verde",
  },
  vermelho: { cor: "#ff0000", titulo: "Vermelho" },
  cinza: { cor: "#6b6b6b", titulo: "Cinza" },
  preto: { cor: "#000", titulo: "Preto" },
  roxo: { cor: "#6100ff", titulo: "Roxo" },
  branco: { cor: "#ddd", titulo: "Branco" },
  multicolor: {
    cor: "linear-gradient(180deg, #F00 0%, #939F00 34%, #EBFF00 64%, #009 100%)",
    titulo: "Muticolor",
  },
};

const tamanhos = ["P", "M", "G", "GG", "GG1", "GG2"];

function ProductPage({ products, titulo }) {
  return (
    <>
      <MainProductDetailsHome>
        <div
          style={{
            height: "85dvh",
            width: "15%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            paddingBlock: "1rem",
            paddingInline: ".5rem",
            gap: "1rem",
          }}
        >
          <h4 style={{fontWeight: 500, fontSize: "2rem"}}>{titulo}</h4>
          <p>Produtos para sua alta performance (9999)</p>
          <Separator />
          <div>
            <p style={{ marginBlock: "1em" }}>Cores</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "1em",
              }}
            >
              {Object.keys(cores).map((cor, index) => (
                <div
                  key={index++}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "1rem",
                      width: "1rem",
                      borderRadius: "100%",
                      background: "" + cores[cor].cor,
                    }}
                  ></div>
                  <p style={{ fontSize: ".7em" }}>{cores[cor].titulo}</p>
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <p style={{ marginBlock: "1em" }}>Tamanhos</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "1em",
              }}
            >
              {tamanhos.map((tamanho) => (
                <button
                  style={{
                    background: "transparent",
                    color: "#000",
                    border: "1px solid #000",
                    borderRadius: 5,
                    padding: ".5rem 1rem",
                    cursor: "pointer"
                  }}
                >
                  {tamanho}
                </button>
              ))}
            </div>
          </div>
        </div>
        <ContainerProducts>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              produto={product.produto}
              preco={product.preco}
              src={product.src}
            />
          ))}
        </ContainerProducts>
      </MainProductDetailsHome>
      <Footer />
    </>
  );
}

export default ProductPage;
