import React from 'react'
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded'
import PropTypes from 'prop-types'

/**
 * @param className {string} - The class of the rouded button
 * @param status {string} - The status to be displayed
 * @returns {JSX.Element} - The MemberStatusRoundedIcon component
 */
const MemberStatusRoundedIcon = ({ status, className }) => {
    return <Brightness1RoundedIcon color={status === 'En ligne' ? 'success' : 'disconnected'} fontSize={'small'} className={className} />
}

MemberStatusRoundedIcon.prototype = {
    status: PropTypes.string,
    className: PropTypes.string
}
export default MemberStatusRoundedIcon
