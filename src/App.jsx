import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import PricingPage from "./pages/Pricing";
import ErrorPage from "./pages/PageNotFound";
import CategoriesPage from "./pages/categories/Categories";
import GenderPage from "./pages/categories/Gender";
import PageNav from "./components/PageNav";
import CustomerPage from "./pages/CustomerPage";

function App() {
  return (
    <>
      <BrowserRouter basename="/shop">
        <PageNav/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="categories" element={<CategoriesPage />}>
            <Route path="male" element={<GenderPage />} />
            <Route path="female" element={<GenderPage />} />
          </Route>
          <Route path="customer">
            <Route path=":id" element={<CustomerPage/>}/>
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
