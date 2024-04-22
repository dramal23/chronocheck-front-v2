import React, { useEffect, useState } from 'react'
import axios from "axios"
import ModeleItem from './ModeleItem'

function Modele() {

    const [data, setData] = useState([])
    const url = "http://localhost:4000/watches/"

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.log(response.data.data);
                setData(response.data.data)
            })
    }, [url])

    return (
        <div className='rounded-div py-5 mb-10'>
            <h1 className='text-3xl font-semibold my-5'>Modèles</h1>
            <div className='grid gap-3 md:grid-cols-2 1xl:grid-cols-3 1sm:grid-cols-1 sm:flex-col  sm:flex mb-16'>
                {data.map((model) => (
                    <ModeleItem key={model.id} model={model} />
                ))}
            </div>
        </div>
    )
}

export default Modele
