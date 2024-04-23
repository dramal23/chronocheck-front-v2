import React, { useState, useEffect } from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from "react-router-dom"

function MontreItem({ montre }) {

  return (
    <tr className='h-[75px] border-b border-t overflow-hidden'>
      <td className='w-5' onClick={savemontre}>
        {savedmontre ? <AiOutlineHeart color='red' /> : <AiOutlineHeart />}
      </td>
      <td className='lg:w-14'>{montre.id}</td>
      <td>
        <div className='flex items-center'>
          <img className='w-6 mr-2' src={montre.brand_name} alt={montre.id} />
          <div className='w-auto font-bold'><Link to={`/montre/${montre.id}`}>{montre.name}</Link></div>
          <div className='text-xs ml-2 text-hsla-gray dark:text-0.6'><Link to={`/montre/${montre.id}`}>{montre.symbol.toUpperCase()}</Link></div>
        </div>
      </td>
      <td className='w-40'>
        {/* <div><Link to={`/montre/${montre.id}`}>{montre.symbol.toUpperCase()}</Link></div> */}
      </td>
      <td className='w-40 text-sm py-1 px-2'>${montre.current_price.toLocaleString()}</td>
      <td className={montre.price_change_percentage_24h > 0 ? "text-green-500 w-40 text-sm" : "text-red-600 w-40 text-sm"}>{montre.price_change_percentage_24h.toFixed(2)}%</td>
      <td>
        <Sparklines svgWidth={140} data={montre.sparkline_in_7d.price}>
          <SparklinesLine color="lightblue" />
        </Sparklines>
      </td>
    </tr>
  )
}

export default MontreItem