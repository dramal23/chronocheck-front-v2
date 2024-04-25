import React from "react";
import Marque from "../components/Marque";

function Marques(props) {
    return (
        <div>
            <Marque montres={props.montres} />
        </div>
    );
}

export default Marques;
