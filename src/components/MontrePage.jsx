import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";

function MontrePage() {

    const [data, setData] = useState([])
    const { montreId } = useParams();
    const [loading, setLoading] = useState(false)

    const url = `http://localhost:4000/watches/${montreId}`

    console.log("URL de l'API:", url);

    const montreData = async () => {
        try {
            await axios.get(url)
                .then((response) => {
                    setData(response.data.data)
                })
            setLoading(true)
        } catch (error) {
            console.error(`ERROR:  ${error}`)
        }
    }

    useEffect(() => {
        montreData()
        setLoading(false)
    }, [url])

    return (
        <div>
            <div className='rounded-div mt-6 py-4'>
    
                {loading ? (
                    <div className='flex justify-center'>
                        <div className='flex-col'>
                            <div className='mt-5 flex'>
                                <img className='w-8 mr-2' src={montreData.image && montreData.image_small} alt={montreData.model_name} />
                                <h1 className='font-bold text-xl'>{montreData.model_name}</h1>
                            </div>
                            <div className='mt-3 flex'>
                                <h1 className='font-bold text-3xl'>${montreData.price}</h1>
                            </div>
                            <div className='mt-4'>
                                <Sparklines svgWidth={450} data={montreData.price_history}>
                                    <SparklinesLine color='lightblue' />
                                </Sparklines>
                            </div>
                        </div>
                    </div>
                ) : (<div className='flex justify-center'>
                    <ReactLoading type='spin' color='black' />
                </div>)}
            </div>
        </div>
    )
}


export default MontrePage