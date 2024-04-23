import React, { useEffect, useState } from 'react'
import MontreItem from './MontreItem'
import { Sparklines, SparklinesLine } from 'react-sparklines';

function Montres({ montres }) {
    return (
        <div>
            <div className='rounded-div'>
                <div className='justify-center flex my-3'>
                    <input type="text" className='bg-gray-600 rounded-md py-1 indent-3 outline-none my-5' placeholder='Rechercher' />
                </div>

                <div className='relative'>
                    <div className='overflow-x-auto'>
                        <table className='w-full border-collapse text-center'>
                            <thead className='h-11 '>
                                <tr className='border-b border-t'>
                                    <th className='text-left text-sm whitespace-nowrap'>Marque</th>
                                    {/*<th className='text-left text-sm whitespace-nowrap'>Marque</th>*/}
                                    <th className='text-sm whitespace-nowrap'>Prix moyen</th>
                                    <th className='text-sm w-17 whitespace-nowrap'>Evolution</th>
                                </tr>
                            </thead>
                            <tbody>
                                {montres.data && Array.isArray(montres.data) && montres.data.map((montre, index) => (
                                    <tr key={index}>
                                        {console.log("La montre " + montre.brand_name + " a pour URL de logo" + montre.logo_url)}
                                        <td><img className="rounded-full" src={montre.logo_url} alt={"Image"+ montre.brand_name}/></td>
                                        {/*<td>{montre.brand_name}</td>*/}
                                        <td>{montre.avg_price} €</td>
                                        <td>
                                            {console.log("Price history:", montre.price_history)}
                                            {montre.price_history ? (
                                                <Sparklines svgWidth={250} data={montre.price_history.split(',')}>
                                                    <SparklinesLine color="white" />
                                                </Sparklines>
                                            ) : (
                                                <Sparklines svgWidth={250} data={[0]}>
                                                    <SparklinesLine color="white" />
                                                </Sparklines>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Montres;