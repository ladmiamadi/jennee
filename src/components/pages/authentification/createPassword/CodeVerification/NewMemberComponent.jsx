import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import NewMemberForm from '@common/form/NewMember/NewMemberForm'
import { Box, Typography } from '@mui/material'

/**
 Represents the NewMemberComponent functional component.
 @param {object} props - The props object containing the following properties:
 @param {function} setFormValue - A function to set the formValue state.
 @param {object} formValue - An object containing the current form values.
 @param {function} HandleSubmit - A function to handle the form submission.
 @param {function} handleChange - A function to handle the form field changes.
 @param {object} error - An object containing any errors in the form.
 @returns {JSX.Element} - A React JSX element that renders the NewMemberComponent.
 */

const NewMemberComponent = ({ setFormValue, formValue, HandleSubmit, handleChange, error }) => {
    return (
        <Box component={'div'} className="card">
            <div className="card__header">
                <Typography className={'card__title'} variant={'h3'} component={'p'}>
                    BDE MAS’QUADRA
                </Typography>
                <Typography variant={'subtitle1'} className="card__text" gutterBottom>
                    Vous à invité à rejoindre leur équipe
                </Typography>
                <Typography variant={'subtitle1'} className="card__text" gutterBottom>
                    Veuillez renseigner le code recu sur votre adresse e-mail
                </Typography>
            </div>
            <div className="card__body">
                <NewMemberForm
                    formValue={formValue}
                    setFormValue={setFormValue}
                    handleChange={handleChange}
                    className={'card__form'}
                    name={'form'}
                    HandleSubmit={HandleSubmit}
                    error={error}
                />
            </div>
            <Link className="card__footer-title--tutorial" to={''}>
                Renvoyer le code
            </Link>
        </Box>
    )
}

NewMemberComponent.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object
}

export default NewMemberComponent
