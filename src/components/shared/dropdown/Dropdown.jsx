import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as ArrownDown } from '@assets/svg/arrow/arrow-down.svg'
import { ReactComponent as ArrowUp } from '@assets/svg/arrow/arrow-up.svg'
import { Divider } from '@mui/material'

/**

 A React functional component for dropdown filter.
 @param {Object} props - The props object containing the name and className props.
 @param {string} props.filterList - The array for display filter name.
 @returns {JSX.Element} - A dropdown element
 */
const Dropdown = ({ filterList }) => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(false)
    const handleOpenChangeArrow = (e) => {
        e.preventDefault()
        setTimeout(() => {
            setOpen(!open)
        }, 30)
    }
    return (
        <div className={open ? 'dropdown dropdown--unfold' : 'dropdown'}>
            <div className={open ? 'dropdown__title-content dropdown__title-content--unfold' : 'dropdown__title-content'}>
                <p className="dropdown__title">Trier {selected !== false ? `par : ${selected}` : ''} </p>
                {open ? <ArrownDown onClick={(e) => handleOpenChangeArrow(e)} /> : <ArrowUp onClick={(e) => handleOpenChangeArrow(e)} />}
            </div>
            <input type="checkbox" id="touch" />
            <Divider light />
            <ul className={open ? 'dropdown__menu dropdown__menu--unfold' : 'dropdown__menu'}>
                {filterList.map((item) => (
                    <li
                        aria-hidden="true"
                        key={item.id}
                        onClick={() => setSelected(item.name)}
                        className={selected === item.name ? 'dropdown__menu__item dropdown__menu__item--selected' : 'dropdown__menu__item'}>
                        <a href="#">{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
Dropdown.propTypes = {
    filterList: PropTypes.arrayOf(Object).isRequired
}

export default Dropdown
