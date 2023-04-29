import React from 'react'
import { Box } from '@mui/material'
import { ReactComponent as JeneeLogo } from '@assets/svg/mainLayout/jenee-logo.svg'
import { ReactComponent as JeneeAvatar } from '@assets/svg/mainLayout/jenee-avatar.svg'
import { NAVBAR_MENU_ITEMS } from '@constants/navbarMenuItemsConst'
import { Link } from 'react-router-dom'
import { ROUTES } from '@constants/routesConst'
import { useSelector } from 'react-redux'
import { openItemSelector } from '@selectors/application.selector'
const Navbar = () => {
    const activeItem = useSelector(openItemSelector)
    return (
        <Box className="navbar">
            <div className={'navbar__container'}>
                <Link className="navbar__logo" to={ROUTES.DASHBOARD.EVENTS.PATH}>
                    <JeneeLogo />
                </Link>
                <div className="navbar__menu">
                    {NAVBAR_MENU_ITEMS.map((item) => (
                        <Link
                            to={item.link}
                            key={item.title}
                            className={
                                item.link.split('/')[0] === activeItem
                                    ? 'navbar__menu__items navbar__menu__items--select'
                                    : 'navbar__menu__items'
                            }>
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
