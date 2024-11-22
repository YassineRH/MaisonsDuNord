import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./assets/Pages/Root";
import SalesPage, { loader as SalesLoader } from "./assets/Pages/Sales";
import HomePage from "./assets/Pages/Home";
import BuildingDetailsPage, {
  action as SubmitApartment,
} from "./assets/Pages/BuildingDetails";
//hzrhnqm
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "ventes",
        id: "sales",
        loader: SalesLoader,
        children: [
          { index: true, element: <SalesPage /> },
          {
            path: ":buildingId",
            element: <BuildingDetailsPage />,
            action: SubmitApartment,
          },
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
