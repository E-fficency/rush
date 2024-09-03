import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Erro from "./pages/Error";
import EmAlta from "./pages/EmAlta";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Erro />,
      children: [
        {
          path: "/emalta",
          element: <EmAlta />
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
