import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

function Inscription() {
    return (
        <div className="max-w-[350px] mx-auto min-h-100/514 px-4 py-20">
            <h1 className="font-semibold text-3xl flex justify-center">S'inscrire</h1>
            <form onSubmit="">
                <div className="my-5">
                    <label className="text-sm" htmlFor="email">
                        Identifiant
                    </label>
                    <div className="my-2 w-full relative rounded-2xl shadow-xl">
                        <input
                            onChange=""
                            className="w-full p-2 border rounded-2xl"
                            required
                            id="email"
                            type="email"
                            placeholder="E-mail"
                        />
                        <AiOutlineMail className="absolute right-4 top-3 text-gray-400" />
                    </div>
                </div>
                <div className="my-5">
                    <label className="text-sm" htmlFor="password">
                        Mot de passe
                    </label>
                    <div className="my-2 w-full relative rounded-2xl shadow-xl">
                        <input
                            onChange=""
                            className="w-full p-2 border rounded-2xl"
                            required
                            id="password"
                            type="password"
                            placeholder="**********"
                        />
                        <RiLockPasswordLine className="absolute right-4 top-3 text-gray-400" />
                    </div>
                </div>
                <button className="sign-btn" type="submit">
                    S'inscrire
                </button>
            </form>
            <p className="my-3 text-gray-200 text-sm">
                Déjà un compte?{" "}
                <Link className="font-semibold text-blue-400" to="/connexion">
                    Se connecter
                </Link>
            </p>
        </div>
    );
}

export default Inscription;
