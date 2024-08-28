import { useNavigate, useRoutes } from "react-router";
import Landing from "./Pages/LandingPage/Landing";
export default function Router() {



    let element = useRoutes([

        {
        path:'/',
        element : <Landing /> ,
       },

    ])
    return element
}