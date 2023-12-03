import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout";
import Accueil from "../pages/Accueil";
import Projets from "../pages/Projets";
import Propos from "../pages/Propos";
import Contact from "../pages/Contact";

const App = () => {

    const routes = [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Navigate to="/accueil" replace />,
                },
                {
                    path: "accueil",
                    element: <Accueil />,
                },
                {
                    path: "projets",
                    element: <Projets />,
                },
                {
                    path: "propos",
                    element: <Propos />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                }
            ]
        },
        {
            path: "*",
            element: <Navigate to="/accueil" replace />,
        }
    ];

    return(
        <RouterProvider
            router={createBrowserRouter(routes)}
        />
    )
}

export default App;