import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Erro from "./pages/Error";
import EmAlta from "./pages/EmAlta";
import MaterialEsportivo from "./pages/MaterialEsportivo";
import Ofertas from "./pages/Ofertas";
import Carrinho from "./pages/Carrinho";
import Perfil from "./pages/Perfil";
import Produto from "./pages/Produto";
import Busca from './components/Busca'
import FinalizarCompra from "./pages/FinalizarCompra";
import PedidoRealizado from "./pages/PedidoRealizado";
import ListaDeDesejos from "./pages/ListaDeDesejos";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Erro />,
    },
    {
      path: "/emalta",
      element: <EmAlta />
    },
    {
      path: "/materialesportivo",
      element: <MaterialEsportivo />
    },
    {
      path: "/ofertas",
      element: <Ofertas />
    },
    {
      path: "/pedidos",
      element: <Carrinho/>
    },
    {
      path: "/perfil",
      element: <Perfil/>
    },
    {
      path: "/produto/:id",
      element: <Produto />
    },
    {
      path: "/busca",
      element: <Busca/>
    },
    {
      path: "/finalizarcompra",
      element: <FinalizarCompra />
    },
    {
      path: "pedidorealizado",
      element: <PedidoRealizado/>   
    },
    {
      path: "/listadedesejos",
      element: <ListaDeDesejos/> 
    }

    
  ]);
  return <RouterProvider router={router} />;
}

export default App;
