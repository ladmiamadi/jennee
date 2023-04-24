import React from 'react'
import { Box, Divider } from '@mui/material'
import Button from '@common/button/Button'
import * as PropTypes from 'prop-types'
import BackLink from '@common/link/BackLink'

const HeaderPostDetailsContent = ({ handleClick, btnName, link, editPost, setEditPost }) => {
    return (
        <Box className="header-page-content" marginTop={'64px'}>
            <div className={'header-page-content__container'}>
                <div className="header-page-content__left">
                    <BackLink title={'Retour'} link={link} className={'header-page-content__left__link__back'} />
                </div>
                <div className="header-page-content__search-create">
                    {editPost && <Button handleClick={handleClick} name={'Supprimer'} className="button--danger" />}
                    <Button onClick={() => setEditPost(!editPost)} name={btnName} className="button__primary" />
                </div>
            </div>
            <Divider component={'hr'} />
        </Box>
    )
}

HeaderPostDetailsContent.propTypes = {
    link: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    btnName: PropTypes.string.isRequired,
    editPost: PropTypes.bool.isRequired,
    setEditPost: PropTypes.func
}

export default HeaderPostDetailsContent
