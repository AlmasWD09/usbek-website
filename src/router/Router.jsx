import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage";
import MailLayout from "../layout/MailLayout";
import Home from "../pages/home/Home";
import ViewAll from "../pages/viewAll/ViewAll";
import ViewDetails from "../pages/viewDetails/ViewDetails";

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
            {
                path: "/view-all",
                element: <ViewAll />,
            },
            {
                path: "/view-details",
                element: <ViewDetails />,
            },
        ],
    },
]);

export default router;
