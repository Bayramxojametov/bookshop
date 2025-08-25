import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";

import Login from "./components/Login";
import BookPage from "./pages/BookPage";
import ContactPage from "./pages/ContactPage";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/books" element={<BookPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
