import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";
import montres from "./Montres.jsx";

const save = async () => {
    alert("Connectez-vous pour suivre vos montres préférées ⌚🚀")
}

function MontreItem({ montres }) {
    return (
        <tbody>
        {montres.data &&
            Array.isArray(montres.data) &&
            montres.data.map((montre, index) => (
                <tr
                    className="h-[75px] border-b border-t overflow-hidden"
                    key={index}
                >
                    <td>
                        <AiOutlineHeart onClick={save} color="lightblue"/>
                    </td>
                    {console.log(
                        "La montre " +
                        montre.brand_name +
                        " a pour URL de logo" +
                        montre.logo_url
                    )}
                    {/*<td>*/}
                    {/*    <img className="rounded-full" src={montre.logo_url} alt={"Image"+ montre.brand_name}/>*/}
                    {/*</td>*/}
                    <td></td>
                    <td className="font-bold text-xl lightblue">
                        {montre.brand_name}
                    </td>
                    <td>{montre.avg_price} €</td>
                    <td className="p-4">
                        {console.log("Price history:", montre.price_history)}
                        {montre.price_history ? (
                            <Sparklines
                                svgWidth={250}
                                data={montre.price_history.split(",")}
                            >
                                <SparklinesLine color="white"/>
                            </Sparklines>
                        ) : (
                            <Sparklines svgWidth={250} data={[0]}>
                                <SparklinesLine color="white"/>
                            </Sparklines>
                        )}
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default MontreItem;
