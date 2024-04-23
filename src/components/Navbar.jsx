import React, { useEffect } from 'react'
import logo from '../assets/logo02.png';
import { Link, useNavigate } from "react-router-dom"
import {AiOutlineHeart} from "react-icons/ai";


function Navbar() {
    return (
        <header>
            <div className=''>
                <div className='rounded-div flex justify-between items-center h-20 font-semibold'>
                    <div className='flex items-center'>
                        <Link to="/" className='flex items-center'>
                            <img src={logo} width="30px" className='mr-2' /><h1 className='text-xl'>ChronoCheck</h1>
                        </Link>
                        <div className='nav-menu mt-3 ml-11 sm:hidden'>
                            <ul className='flex font-semibold mb-2 text-gray-200'>
                                <li className='pr-6'>
                                    <a href='/#' className='hover:text-green-hover '>Accueil</a>
                                </li>
                                <li className='pr-6'>
                                    <a href='javascript:void(0);' className='hover:text-green-hover'>
                                        <Link to="/marques">
                                            Marques
                                        </Link>
                                    </a>
                                </li>
                                <li className='pr-6'>
                                    <a href='javascript:void(0);' className='hover:text-green-hover'>
                                        <Link to="/modeles">
                                            Modèles
                                        </Link>
                                    </a>
                                </li>
                                <li>
                                    <a className='text-gray-500'>Watchlist</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </header>
    )
}

export default Navbar