import { useRoutes } from "react-router-dom";
import { FormPage } from "../pages/formPage";

export const PublicRoutes = () => {
    return useRoutes([
        {path: '/form', element: <FormPage/>}
    ])
}