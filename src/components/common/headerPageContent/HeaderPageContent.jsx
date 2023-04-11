import React, { useState } from 'react'
import { Box, Divider, Typography } from '@mui/material'
import Button from '@common/button/Button'
import PropTypes from 'prop-types'
import InputSearch from '@common/input/InputSearch'

const HeaderPageContent = ({ title, menuItems, handleOpen, btnName }) => {
    const [filterSelect, setFilterSelect] = useState(0)
    return (
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
                                    {item.title}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className="header-page-content__search-create">
                    <InputSearch placeholder="Recherche" handleChange={() => ''} value={''} onChange={() => ''} dataOnChange={{}} />
                    <Button handleClick={handleOpen} name={btnName} className="button__primary" />
                </div>
            </div>
            <Divider component={'hr'} />
        </Box>
    )
}

HeaderPageContent.propTypes = {
    title: PropTypes.string.isRequired,
    menuItems: PropTypes.arrayOf(Object).isRequired,
    handleOpen: PropTypes.func,
    btnName: PropTypes.string.isRequired
}

export default HeaderPageContent
