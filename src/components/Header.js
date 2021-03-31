import React from "react";
import {
    Link
} from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <Link className="header__logo" to="/">Nevis Tech</Link>
            <Link className="header__link" to="/">Главная</Link>
            <Link className="header__link" to="/blog">Блог</Link>
            <Link className="header__link" to="/contacts">Обратная связь</Link>
        </header>
    )
}