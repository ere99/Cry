import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Signin from "./Routes/SignIn";
import Signup from "./Routes/SignUp";
import Account from "./Routes/Account";
import axios from "axios";
import CoinPage from "./Routes/CoinPage";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      // console.log(response.data)
    });
  }, [url]);
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home coins={coins} />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/coin/:coinId" element={<CoinPage />}>
              <Route path="coinId" />
            </Route>
          </Routes>
          <Footer />
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
