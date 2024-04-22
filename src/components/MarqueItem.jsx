import React from 'react'

function MarqueItem({ brand }) {
    if (!brand) return null;

    return (
        <div className='trend-box rounded-2xl'>
            <div className='rounded-div p-7 hover:scale-105 ease-out duration-300'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img className='rounded-full' src={brand.logo_url} alt={brand.brand_name + " Logo"}/>
                        <h2 className='font-semibold text-xl'>{brand.brand_name}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarqueItem