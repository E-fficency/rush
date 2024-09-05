import { AiOutlineMessage, AiOutlineShopping } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { GoHome } from "react-icons/go";

export const botoes = [
  {
    icon: <GoHome />,
    title: "Home",
    link: "/",
  },
  {
    icon: <FaRegHeart />,
    title: "Carrinho de compras",
    link: "/carrinho",
  },
  {
    icon: <AiOutlineShopping />,
    title: "Pedidos",
    link: "/pedidos",
  },
  {
    icon: <AiOutlineMessage />,
    title: "Suporte",
    link: "/suporte",
  },
];
