import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./components/Home/home";
import Character from "./components/Character/character";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/character",
        element: <Character />,
      },
      {
        path: "/character/:id",
        element: <CharacterDetail />,
      },
    ],
  },
]);

export default App;
