import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Erro from "./pages/Error";
import EmAlta from "./pages/EmAlta";
import Carrinho from "./pages/Carrinho";

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
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
