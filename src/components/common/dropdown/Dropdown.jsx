import React from 'react'

const Dropdown = () => {
    return (
        <nav className="dropdown">
            <label htmlFor="touch">
                <p className="dropdown__title">Trier par : Récents</p>

                <input type="checkbox" id="touch" />

                <ul className="dropdown__slide">
                    <li>
                        <a href="#">Popularité</a>
                    </li>
                    <li>
                        <a href="#">Récents</a>
                    </li>
                    <li>
                        <a href="#">Revenu</a>
                    </li>
                    <li>
                        <a href="#">Places restantes</a>
                    </li>
                </ul>
            </label>
        </nav>
    )
}

export default Dropdown
