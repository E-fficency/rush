import { AiOutlineMessage, AiOutlineShopping } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

export const botoes = [
  {
    icon: <GoHome />,
    title: "Home",
  },
  {
    icon: <CgProfile />,
    title: <Link to={'/perfil'}>Sua conta</Link>,
  },
  {
    icon: <FaRegHeart />,
    title: "Lista de desejo",
  },
  {
    icon: <AiOutlineShopping />,
    title: "Pedidos",
  },
  {
    icon: <AiOutlineMessage />,
    title: "Suporte",
  },
];
