import React from 'react'
import { Box, Divider, MobileStepper, Typography } from '@mui/material'
import Input from '@common/input/Input'
import Button from '@common/button/Button'
import CloseIcon from '@mui/icons-material/Close'
import PropTypes from 'prop-types'
import ModalEvent from '@common/modal/Modal'

const ModalExit = ({ handleComeLastStep, handleClose }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        bgcolor: 'background.paper',
        boxShadow: 24,
        padding: 4,
        borderRadius: 3
    }

    return (
        <Box className="modal" sx={style}>
            <div className="modal__container">
                <div className={''}>
                    <div className="modal__button">
                        <Button handleClick={handleClose} className="button__secondary" name="Enregistrer en brouillon" />
                    </div>
                    <div className="modal__button">
                        <Button handleClick={handleComeLastStep} className="button__secondary" name="Revenir à l’étape précédente" />
                    </div>
                    <div className="modal__button">
                        <Button handleClick={handleClose} className="button__primary" name="Quitter sans sauvegarder" />
                    </div>
                </div>
            </div>
        </Box>
    )
}

ModalExit.propTypes = {
    handleClose: PropTypes.func,
    handleComeLastStep: PropTypes.func
}

export default ModalExit
