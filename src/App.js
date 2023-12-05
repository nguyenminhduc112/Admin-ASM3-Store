import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootPage, { loaderRoot } from "./pages/RootPage";
import DashboardPage from "./pages/DashboardPage";
import { loaderLogin } from "./pages/LoginPage.jsx";
import { loaderProductPage } from "./pages/ProductPage.jsx";

import { lazy, Suspense } from "react";


const LoginPage = lazy(() => import('./pages/LoginPage.jsx'))
const ProductPage = lazy(() => import('./pages/ProductPage.jsx'))

const routers = createBrowserRouter([
  {
    path: '/', element: <RootPage />, loader: loaderRoot, children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: "products",
        element: <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}><ProductPage /></Suspense>,
        loader: loaderProductPage
      },
    ]
  },
  {
    path: '/login',
    element: <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}><LoginPage /></Suspense>,
    loader: loaderLogin
  },
])
function App() {
  return (
    <RouterProvider router={routers} />
  );
}

export default App;
