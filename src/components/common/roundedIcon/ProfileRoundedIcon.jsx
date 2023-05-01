import React from 'react'
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

/**
 *
 * @param captionText {string} - The title of the data which is displayed
 * @param className {string} - The class to add style to the rounded icon block
 * @returns {JSX.Element} - The ProfileRoundedIcon component
 */
const ProfileRoundedIcon = ({ captionText, className }) => {
    return (
        <div className={'profile__rounded__icon'}>
            <Brightness1RoundedIcon className={className} />
            <Typography variant="caption" display="block" gutterBottom sx={{ marginBottom: '0' }}>
                {captionText}
            </Typography>
        </div>
    )
}

ProfileRoundedIcon.prototype = {
    captionText: PropTypes.string,
    className: PropTypes.string
}

export default ProfileRoundedIcon
