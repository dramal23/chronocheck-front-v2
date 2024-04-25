import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Sparklines,
    SparklinesLine,
    SparklinesCurve,
    SparklinesSpots,
} from "react-sparklines";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";

function MontrePage() {
    const [data, setData] = useState([]);
    const { montreModelName } = useParams();
    const [loading, setLoading] = useState(false);

    const url = `http://localhost:4000/watches/${encodeURIComponent(
        montreModelName
    )}`;

    console.log("URL de l'API:", url);

    const montreData = async () => {
        try {
            await axios.get(url).then((response) => {
                console.log(response.data[0]);
                console.log(response.data[0].model_name);
                console.log(response.data[0].image);
                console.log(response.data[0].price_history);
                setData(response.data);
            });
            setLoading(true);
        } catch (error) {
            console.error(`ERROR:  ${error}`);
        }
    };

    useEffect(() => {
        montreData();
        setLoading(false);
    }, [url]);

    return (
        <div>
            <div className="rounded-div mt-6 py-4">
                {loading ? (
                    <div className="flex justify-center">
                        <div className="flex-col">
                            <h1 className="font-bold flex justify-center text-2xl">{data[0].model_name}</h1>
                            <div className="mt-5 flex justify-center justify-items-center ">
                                <img
                                    className="mr-2"
                                    src={data[0].image}
                                    width="220px"
                                    alt={"Image d'une" + data[0].brand_name}
                                />
                            </div>
                            <div className="mt-3 flex">
                                <h1 className="font-bold text-3xl">
                                    Prix actuel :{" "}
                                    {data[0].price_history[data[0].price_history.length - 1]} €
                                </h1>
                            </div>
                            <div className="mt-4">
                                <Sparklines svgWidth={450} data={data[0].price_history}>
                                    <SparklinesCurve color="lightblue"/>
                                    <SparklinesSpots/>
                                </Sparklines>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <ReactLoading type="spin" color="black" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default MontrePage;
