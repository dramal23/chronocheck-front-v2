import React from "react";
import { Link } from "react-router-dom";

function ModeleItem({ model }) {
    return (
        <div className="trend-box rounded-md">
            <div className="rounded-div p-6 hover:scale-105 ease-out duration-300">
                <div className="flex justify-between items-center">
                    <div>
                        <img
                            className="rounded-full"
                            src={model.image}
                            alt={model.model_name + " Image"}
                        />
                        <div>
                            <h2 className="font-semibold text-xl">{model.brand_name}</h2>
                            <Link to={`/montre/${model.model_name}`}>
                                <h2 className="font-semibold text-xl">{model.model_name}</h2>
                            </Link>
                        </div>
                    </div>
                    <div className="flex">
                        <p>{model.price}$</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModeleItem;
