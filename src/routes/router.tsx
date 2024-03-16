import App from "../App";
import {Error404} from "../components/pages/Error404";
import {dataState} from "../data/dataState";
import {Page} from "../components/pages/Page";
import { createBrowserRouter } from "react-router-dom";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            { // Если мы используем ссылку, а не кнопку. То мы используем rout(инг) ЭТОТ:
                path: "/page/:id",
                element: (
                    <Page pages={dataState.pages}/>
                ),
            },
            {
                path: "/page/protected",
                element: (
                    <ProtectedRoute>
                        <ProtectedPage/>
                    </ProtectedRoute>
                ),
            }
        ],
    },
]);



//<ProtectedRoute> - это стрелочник, который будет решать давать нам допуск на эту страницу? или не давать?
// ProtectedRoute - это функция, в которую мы вставляем нашу защищенную компоненту. <ProtectedPage/>

/*
{ // Если мы используем ссылку, а не кнопку. То мы используем rout(инг) ЭТОТ. Без всяких hook(ов)
    path: "/page/:id",
        element
:
    (
        <Page pages={dataState.pages}/>
    ),
}*/
