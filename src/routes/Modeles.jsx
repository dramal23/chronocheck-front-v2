import React from "react";
import Modele from "../components/Modele";

function Modeles(props) {
    return (
        <div>
            <Modele montres={props.montres} />
        </div>
    );
}

export default Modeles;
