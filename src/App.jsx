import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Router } from "react-router-dom"
import Home from "./routes/Home";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import MontrePage from "./components/MontrePage";
import Footer from "./components/Footer";
import Modeles from "./routes/Modeles";
import Marques from "./routes/Marques";


function App() {

  const [data, setData] = useState([])
  const url = "http://localhost:4000/watches/brandinfos/"

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setData(response.data)
      })
  }, [url])

  return (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/*" element={<Home montres={data} />} />
            <Route path="/marques" element={<Marques />} />
            <Route path="/modeles" element={<Modeles />} />
            <Route path="/montre/:montreModelName" element={<MontrePage />}>
              <Route path=":montreModelName" />
            </Route>
          </Routes>
          <Footer />
        </div>
  );
}

export default App;