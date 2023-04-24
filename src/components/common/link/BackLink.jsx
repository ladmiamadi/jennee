import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Typography } from '@mui/material'

const BackLink = ({ link, title, className }) => {
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

export default BackLink
