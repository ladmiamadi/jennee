import React, { useState } from 'react'
import { Box, Divider, Typography } from '@mui/material'
import Button from '@common/button/Button'
import PropTypes from 'prop-types'
import InputSearch from '@common/input/InputSearch'
import { Link, useLocation } from 'react-router-dom'
import HeaderProfilePage from '@common/headerPageContent/HeaderProfilePage'

/**
 A React functional component for rendering header page content with exemple: event, event passe =....
 @param {Object} props - The props object containing props.
 @param {string} props.title - The header title.
 @param {Array} props.menuItems - IS an Array with data item nav
 @param {function} props.handleClick - A function for button.
 @param {object}  props.organization- The organization object for profile
 @returns {JSX.Element} - An input element with the specified props.
 */

const HeaderPageContent = ({ title, menuItems, handleClick, organization }) => {
    const [filterSelect, setFilterSelect] = useState(0)

    const location = useLocation()

    return location.pathname.includes('details') ? (
        ''
    ) : (
        <>
            {location.pathname.includes('profil') ? <HeaderProfilePage organizationProfile={organization} /> : ''}
            <Box className="header-page-content">
                <div className={'header-page-content__container'}>
                    <div className="header-page-content__left">
                        <Typography variant={'h4'} className="header-page-content__title">
                            {title}
                        </Typography>
                        <div className="header-page-content__menu">
                            {menuItems.map((item, i) => {
                                return (
                                    <button
                                        onClick={() => setFilterSelect(i)}
                                        className={
                                            filterSelect === i
                                                ? 'header-page-content__menu__item header-page-content__menu__item--select'
                                                : 'header-page-content__menu__item'
                                        }
                                        key={item.id}>
                                        {item.link ? <Link to={item.link}>{item.title}</Link> : item.title}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="header-page-content__search-create">
                        <InputSearch placeholder="Recherche" handleChange={() => ''} value={''} onChange={() => ''} dataOnChange={{}} />
                        <Button handleClick={handleClick} name={menuItems[filterSelect].btnName} className="button__primary" />
                    </div>
                </div>
                <Divider component={'hr'} />
            </Box>
        </>
    )
}

HeaderPageContent.propTypes = {
    title: PropTypes.string.isRequired,
    menuItems: PropTypes.arrayOf(Object).isRequired,
    handleOpen: PropTypes.func,
    handleClick: PropTypes.func,
    organization: PropTypes.object
}

export default HeaderPageContent
