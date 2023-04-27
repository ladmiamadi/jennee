import React from 'react'
import { Box, Divider } from '@mui/material'
import Button from '@common/button/Button'
import * as PropTypes from 'prop-types'
import BackLink from '@common/link/BackLink'

/**
 * @param handleClick {function} - The function to be executed when clicking on update button
 * @param btnName {string} - The name of the header button
 * @param dangerBtnName {string} - The name of the header danger button (it can be a delete button or cancel button...)
 * @param backLink {string} - The route of the back link
 * @param editContent {boolean} - The prop to allow editing content or not
 * @param setEditContent {function} - The function to update editing state
 * @returns {JSX.Element} - The HeaderDetailsPageContent component
 * @constructor
 */
const HeaderDetailsPageContent = ({ handleClick, btnName, backLink, editContent, setEditContent, dangerBtnName }) => {
    return (
        <Box className="header-page-content" marginTop={'64px'}>
            <div className={'header-page-content__container'}>
                <div className="header-page-content__left">
                    <BackLink title={'Retour'} link={backLink} className={'header-page-content__left__link__back'} />
                </div>
                <div className="header-page-content__search-create">
                    {editContent && <Button handleClick={handleClick} name={dangerBtnName} className="button--danger" />}
                    <Button handleClick={() => setEditContent(!editContent)} name={btnName} className="button__primary" />
                </div>
            </div>
            <Divider component={'hr'} />
        </Box>
    )
}

HeaderDetailsPageContent.propTypes = {
    backLink: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    btnName: PropTypes.string.isRequired,
    dangerBtnName: PropTypes.string,
    editContent: PropTypes.bool.isRequired,
    setEditContent: PropTypes.func
}

export default HeaderDetailsPageContent
