
import Homepage from "./pages/Homepage"
import ViewDetails from "./pages/ViewDetails"
export const routes = [
    {
        path: '/',
        element: Homepage
    },
    {
        path: '/view-details/:id',
        element: ViewDetails
    },
]