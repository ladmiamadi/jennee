import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'

/**
 *
 * @param {string} city - The organization's city
 * @param {string} year - the organization's city
 * @param {number} membersLength - the length of the members list
 * @param {string} role - the role of the organization
 * @returns {JSX.Element} - the ProfileAsso component
 */
const ProfileAsso = ({ city, year, membersLength, role }) => {
    return (
        <div className={'profile__content__informations__asso'}>
            <Typography variant="subtitle1" gutterBottom>
                Mon Asso
            </Typography>
            <Box sx={{ width: '100%', maxHeight: '450px', marginTop: '20px' }}>
                <Grid container rowSpacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={'organization__informations__content'}>
                    <Grid item xs={6} className={'organization__informations__content__item'}>
                        <div>
                            <Typography variant="caption" display="block" gutterBottom>
                                VILLE
                            </Typography>
                            {city}
                        </div>
                    </Grid>
                    <Grid item xs={6} className={'organization__informations__content__item'}>
                        <div>
                            <Typography variant="caption" display="block" gutterBottom>
                                ANNÉE
                            </Typography>
                            {year}
                        </div>
                    </Grid>
                    <Grid item xs={6} className={'organization__informations__content__item'}>
                        <div>
                            <Typography variant="caption" display="block" gutterBottom>
                                ÉQUIPE
                            </Typography>
                            <div>{membersLength}</div>
                        </div>
                    </Grid>
                    <Grid item xs={6} className={'organization__informations__content__lastItem'}>
                        <div>
                            <Typography variant="caption" display="block" gutterBottom>
                                RÔLE
                            </Typography>
                            {role}
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

ProfileAsso.prototype = {
    city: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    membersLength: PropTypes.number.isRequired
}

export default ProfileAsso
