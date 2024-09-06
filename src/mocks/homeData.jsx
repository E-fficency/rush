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

export default homeData