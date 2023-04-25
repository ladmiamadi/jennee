import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

const BackLink = ({ link, title, className }) => {
    console.log('link, ', link)
    return (
        <Link to={link}>
            <div className={className}>
                <ArrowBackIosIcon fontSize={'small'} />
                <Typography variant="h5" component="h5">
                    {title}
                </Typography>
            </div>
        </Link>
    )
}
BackLink.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string
}
export default BackLink
