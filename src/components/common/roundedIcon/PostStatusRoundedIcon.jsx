import React from 'react'

import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded'
import PropTypes from 'prop-types'

/**
 *
 * @param className {string} - The class of the rouded button
 * @param status {string} - The status to be displayed
 * @returns {JSX.Element} - The PostStatusRoundedIcon component
 */
const PostStatusRoundedIcon = ({ className, status }) => {
    return <Brightness1RoundedIcon color={status === 'En ligne' ? 'success' : 'secondary'} fontSize={'small'} className={className} />
}

PostStatusRoundedIcon.propTypes = {
    className: PropTypes.string,
    status: PropTypes.string
}
export default PostStatusRoundedIcon
