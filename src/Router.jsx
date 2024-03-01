import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

const Router = createBrowserRouter([
{
    element: (
        <>
        {/* on apelle l'element que l'on veut afficher sur toutes nos vues */}
            <App />
        </>
    ),
    errorElement: <div>Error</div>,
    // on apelle nos vues avec leurs routes
    children: [
        {
            path: "/",
            element: <Screen1 />
        },
        {
            path: "/toto",
            element: <Screen2 />
        }
    ]
}
]);

export default Router