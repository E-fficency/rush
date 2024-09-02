import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Erro from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Erro />,
      // children: [
      //   {
      //     path: "/algo",
      //     element: "<Algo />",
      //   },
      // ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
