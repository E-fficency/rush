import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Erro from "./pages/Error";
import EmAlta from "./pages/EmAlta";
import Carrinho from "./pages/Carrinho";
import Perfil from "./pages/Perfil";
import Produto from "./pages/Produto";
import Busca from './components/Busca'
import FinalizarCompra from "./pages/FinalizarCompra";

function App() {
  const router = createBrowserRouter([
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
    }

    
  ]);
  return <RouterProvider router={router} />;
}

export default App;
