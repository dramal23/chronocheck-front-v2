import React, { useEffect, useState } from "react";
import MontreItem from "./MontreItem";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { AiOutlineHeart } from "react-icons/ai";

function Montres({ montres }) {
    return (
        <div>
            <div className="rounded-div">
                <div className="justify-center flex my-3">
                    <input
                        type="text"
                        className="bg-gray-600 rounded-md py-1 indent-3 outline-none my-5"
                        placeholder="Rechercher"
                    />
                </div>

                <div className="relative">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-center">
                            <thead className="h-11 ">
                            <tr className="border-b border-t">
                                <th></th>
                                <th className="text-left text-sm">#</th>
                                <th className="text-sm whitespace-nowrap">Marque</th>
                                {/*<th className='text-left text-sm whitespace-nowrap'>Marque</th>*/}
                                <th className="text-sm whitespace-nowrap">Prix moyen</th>
                                <th className="text-sm w-17 whitespace-nowrap">Evolution</th>
                            </tr>
                            </thead>

                            <MontreItem montres={montres}/>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Montres;
