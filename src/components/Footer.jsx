import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="">
            <div className="rounded-div mt-8 w-ful text-white hidden lg:block py-4">
                <div className="my-5 grid gap-2 md:grid-cols-4 sm:grid-cols-3">
                    <div className="flex items-center">
                        <img src={logo} width="30px" className="mr-3" />
                        <h1 className="text-2xl font-semibold">ChronoCheck</h1>
                    </div>
                    <div>
                        <ul className="font-semibold mb-2 text-gray-200">
                            <li>
                                <a className="hover:text-green-hover">
                                    <Link to="/">Accueil</Link>
                                </a>
                            </li>
                            <li>
                                <a href="/marques" className="hover:text-green-hover ">
                                    <Link to="/marques">Marques</Link>
                                </a>
                            </li>
                            <li>
                                <a href="/modeles" className="hover:text-green-hover ">
                                    <Link to="/modeles">Modèles</Link>
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-500">Watchlist</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold">Newsletter</h2>
                        <div>
                            <input
                                className="py-1 outline-none text-black text-sm rounded-lg indent-3 my-2 bg-gray-600"
                                type="email"
                                placeholder="E-mail"
                            />
                        </div>
                        <div>
                            <button className="text-xs px-3 py-1 bg-slate-700 rounded-lg">
                                Être tenu informé
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between col-start-2 col-end-4 md:mt-4 sm:mt-9 mt-[68px]">
                        {/*<AiFillFacebook size={20} />*/}
                        {/*<AiOutlineGithub size={20} />*/}
                        {/*<AiOutlineInstagram size={20} />*/}
                        {/*<AiOutlineTwitter size={20} />*/}
                    </div>
                </div>
                <div className="flex justify-center pb-2 text-xs">
                    <small>Copyright © 2024 ChronoCheck. Tous droits réservés.</small>
                </div>
            </div>

            <div className="py-2 1lg:hidden">
                <div className="flex justify-center items-center mt-2 text-xs">
                    Copyright © 2024 ChronoCheck. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
