import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import TextArea from '@common/input/TextArea'
import PropTypes from 'prop-types'

/**
 *
 * @param member {Object} - The member to be displayed with details
 * @param editMember {boolean} - The prop to enable editing member form
 * @param handleTextareaChange {function}- The function to execute when textArea content is changed
 * @param {Object} dataOnChange - An object containing the state and setState functions for updating the input's value and the name of the input element.
 * @returns {JSX.Element} - The memberDetailsContentDescription component
 * @constructor
 */
const MemberDetailsContentDescription = ({ member, editMember, handleTextareaChange, dataOnChange }) => {
    return (
        <div className={'member__details__description'}>
            <Typography variant="h6" gutterBottom>
                Description
            </Typography>
            <div className={'member__details__description__content'}>
                <div className={'member__details__description__content__text'}>
                    <TextArea
                        name={member.name}
                        className={''}
                        value={member.description}
                        onChange={handleTextareaChange}
                        required={false}
                        isDisabled={!editMember}
                        dataOnChange={dataOnChange}
                    />
                </div>
                <Box sx={{ width: '40%' }}>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        className={'member__details__description--feedback'}>
                        <Grid item xs={6} className={'member__details__description__content--feedback--number'}>
                            <div>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Poste
                                </Typography>
                                {member.role}
                            </div>
                        </Grid>
                        <Grid item xs={6} className={'member__details__description__content--feedback--number'}>
                            <div>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Pôle
                                </Typography>
                                {member.pole}
                            </div>
                        </Grid>
                        <Grid item xs={6} className={'member__details__description__content--feedback--number'}>
                            <div>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Membre depuis le:
                                </Typography>
                                {member.registrationDate}
                            </div>
                        </Grid>
                        <Grid item xs={6} className={'member__details__description__content--feedback--reaction'}>
                            <div>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Autorisation
                                </Typography>
                                {member.authorisation}
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

MemberDetailsContentDescription.propTypes = {
    member: PropTypes.object.isRequired,
    editMember: PropTypes.bool,
    handleTextareaChange: PropTypes.func,
    dataOnChange: PropTypes.object
}

export default MemberDetailsContentDescription
