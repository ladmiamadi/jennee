import React, { useState } from 'react'
import { Box } from '@mui/material'
import { ReactComponent as JeneeLogo } from '@assets/svg/mainLayout/jenee-logo.svg'
import { ReactComponent as JeneeAvatar } from '@assets/svg/mainLayout/jenee-avatar.svg'
import { NAVBAR_MENU_ITEMS } from '@constants/navbarMenuItemsConst'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [select, setSelect] = useState(0)
    return (
        <Box className="navbar">
            <div className={'navbar__container'}>
                <div className="navbar__logo">
                    <JeneeLogo />
                </div>
                <div className="navbar__menu">
                    {NAVBAR_MENU_ITEMS.map((item, i) => (
                        <Link
                            to={item.link}
                            key={i}
                            onClick={() => setSelect(i)}
                            className={select === i ? 'navbar__menu__items navbar__menu__items--select' : 'navbar__menu__items'}>
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className="navbar__avatar">
                    <JeneeAvatar />
                </div>
            </div>
        </Box>
    )
}

export default Navbar