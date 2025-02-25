import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage";
import MailLayout from "../layout/MailLayout";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MailLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default router;
