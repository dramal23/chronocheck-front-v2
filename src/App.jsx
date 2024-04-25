import React from "react";
import Navbar from "./components/Navbar";
import MontrePage from "./components/MontrePage";
import Footer from "./components/Footer";
import Modeles from "./routes/Modeles";
import Marques from "./routes/Marques";
import Connexion from "./routes/Connexion";
import Inscription from "./routes/Inscription";

import { Routes, Route, Router } from "react-router-dom";
import Home from "./routes/Home";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


function App() {
    const [data, setData] = useState([]);
    const url = "http://localhost:4000/watches/brandinfos/";

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
        });
    }, [url]);

    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/*" element={<Home montres={data}/>} />
                <Route path="/marques" element={<Marques/>} />
                <Route path="/modeles" element={<Modeles/>} />
                <Route path="/montre/:montreModelName" element={<MontrePage/>}>
                    <Route path=":montreModelName"/>
                </Route>
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/inscription" element={<Inscription />} />


            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
