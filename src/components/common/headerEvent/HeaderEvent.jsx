import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Button from '../button/Button'
import Input from '../input/Input'
import PropTypes from 'prop-types'
import { EVENT_MENU_ITEMS } from '@constants/eventMenuItemsConst'

const HeaderEvent = ({ handleOpen }) => {
    const [filterSelect, setFilterSelect] = useState(0)
    return (
        <Grid container className="header-event">
            <Grid item xs={2} className="header-event__title">
                <h1>Mes events</h1>
            </Grid>
            <Grid item xs={6} className="header-event__menu">
                {EVENT_MENU_ITEMS.map((item, i) => {
                    return (
                        <button
                            onClick={() => setFilterSelect(i)}
                            className={
                                filterSelect === i
                                    ? 'header-event__menu__item header-event__menu__item--select'
                                    : 'header-event__menu__item'
                            }
                            key={i}>
                            {item.title}
                        </button>
                    )
                })}
            </Grid>
            <Grid item xs={4} className="header-event__search-create">
                <Input className="input__primary" placeholder="Recherche" handleChange={() => ''} />
                <Button handleClick={handleOpen} text="Créer un nouvel event" className="button__primary" />
            </Grid>
        </Grid>
    )
}

HeaderEvent.propTypes = {
    handleOpen: PropTypes.func
}

export default HeaderEvent
