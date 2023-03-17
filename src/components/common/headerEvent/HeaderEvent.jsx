import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Button from '../button/Button'
import Input from '../input/Input'
import PropTypes from 'prop-types'

const HeaderEvent = ({ handleOpen }) => {
    const filter = ['À venir', 'Passés', 'Brouillons', 'Partagés']
    const [filterSelect, setFilterSelect] = useState(0)
    return (
        <Grid container className="header-event">
            <Grid item xs={2} className="header-event__title">
                <h1>Mes events</h1>
            </Grid>
            <Grid item xs={6} className="header-event__menu">
                {filter.map((item, i) => {
                    return (
                        <li
                            onClick={() => setFilterSelect(i)}
                            className={
                                filterSelect === i
                                    ? 'header-event__menu__item header-event__menu__item--select'
                                    : 'header-event__menu__item'
                            }
                            key={i}>
                            {item}
                        </li>
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
