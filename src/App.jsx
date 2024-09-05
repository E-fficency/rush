import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Erro from "./pages/Error";
import EmAlta from "./pages/EmAlta";
import Carrinho from "./pages/Carrinho";
import Perfil from "./pages/Perfil";
import Produto from "./pages/Produto";
import Busca from './components/Busca'

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
      path: "/carrinho",
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
    }

    
  ]);
  return <RouterProvider router={router} />;
}

export default App;
