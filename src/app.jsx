import "./app.css";
import { Route, Routes } from "react-router";
import StoreLayout from "./layouts/store-layout.jsx";
import HomePage from "./pages/home-page/home-page.jsx";
import ProductsPage from "./pages/products-page/products-page.jsx";
import AboutPage from "./pages/about-page/about-page.jsx";
import AddPage from "./pages/add-page/add-page.jsx";
import UpdatePage from "./pages/update-page/update-page.jsx";
import NotFoundPAge from "./pages/not-found-page/not-found-page.jsx";

function App() {
  return (
    <Routes>
      <Route element={<StoreLayout />}>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/products"
          element={<ProductsPage />}
        />
        <Route
          path="/add"
          element={<AddPage />}
        />
        <Route
          path="/edit/:id"
          element={<UpdatePage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="/*"
          element={<NotFoundPAge />}
        />
      </Route>
    </Routes>
  )
}

export default App;
