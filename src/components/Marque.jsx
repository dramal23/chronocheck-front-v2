import React, { useEffect, useState } from "react";
import axios from "axios";
import MarqueItem from "./MarqueItem";

function Marque() {
    const [data, setData] = useState([]);
    const url = "http://localhost:4000/watches/brandinfos/";

    useEffect(() => {
        axios.get(url).then((response) => {
            console.log(response.data);
            setData(response.data.data);
        });
    }, [url]);

    return (
        <div className="rounded-div py-5 mb-10">
            <h1 className="text-3xl font-semibold my-5">Marques</h1>
            <div className="justify-center flex my-3">
                <input
                    type="text"
                    className="bg-gray-600 rounded-md py-1 indent-3 outline-none my-5"
                    placeholder="Rechercher"
                />
            </div>
            <div className="grid gap-8 md:grid-cols-2 1xl:grid-cols-3 1sm:grid-cols-1 sm:flex-col  sm:flex mb-16">
                {data.map((brand) => (
                    <MarqueItem key={brand.id} brand={brand} />
                ))}
            </div>
        </div>
    );
}

export default Marque;
