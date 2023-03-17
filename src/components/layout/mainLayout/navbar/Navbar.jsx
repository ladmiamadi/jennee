import React, { useState } from 'react'
import { Box, Grid } from '@mui/material'
import { ReactComponent as JeneeLogo } from '../../../../assets/svg/mainLayout/jenee-logo.svg'
import { ReactComponent as JeneeAvatar } from '../../../../assets/svg/mainLayout/jenee-avatar.svg'

const Navbar = () => {
    const menu = ['EVENTS', 'MON ASSO', 'FINANCES']
    const [select, setSelect] = useState(0)
    return (
        <Box className="navbar">
            <Grid container className="navbar__container">
                <Grid xs={1} item className="navbar__logo">
                    <JeneeLogo />
                </Grid>
                <Grid xs={4} item className="navbar__menu">
                    {/* <p className="navbar__menu__items navbar__items--select">EVENTS</p>
                    <p className="navbar__menu__items">MON ASSO</p>
                    <p className="navbar__menu__items">FINANCES</p> */}
                    {menu.map((item, i) => {
                        return (
                            <p
                                key={i}
                                onClick={() => setSelect(i)}
                                className={select === i ? 'navbar__menu__items navbar__menu__items--select' : 'navbar__menu__items'}>
                                {item}
                            </p>
                        )
                    })}
                </Grid>
                <Grid xs={1} item className="navbar__avatar">
                    <JeneeAvatar />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Navbar
