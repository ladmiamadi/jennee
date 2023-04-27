import React from 'react'
import PropTypes from 'prop-types'
import Button from '@common/button/Button'
import { Divider } from '@mui/material'

const EventModalFooter = ({ step, handlePrev, handleNext }) => {
    const footer = () => {
        switch (step) {
            case 1:
                return (
                    <div className="modal__button">
                        <Button handleClick={handleNext} className="button__primary" name="Étape suivante" />
                    </div>
                )
            case 2:
                return (
                    <div className={'d-flex justify-between'}>
                        <div className="modal__button mr-40">
                            <Button handleClick={handlePrev} className="button__secondary" name="Étape précédente" />
                        </div>
                        <div className="modal__button">
                            <Button handleClick={handleNext} className="button__primary" name="Étape suivante" />
                        </div>
                    </div>
                )
            case 3:
                return (
                    <div className={'d-flex justify-between'}>
                        <div className="modal__button mr-40">
                            <></>
                            <Button handleClick={handlePrev} className="button__secondary" name="Étape précédente" />
                        </div>
                        <div className="modal__button">
                            <Button handleClick={handleNext} className="button__primary" name="Étape suivante" />
                        </div>
                    </div>
                )
            case 4:
                return (
                    <>
                        <div className={'modal__button-skip-step'}>
                            <Button handleClick={handlePrev} className="button__secondary" name="Passer cette étape" />
                        </div>
                        <Divider>OU</Divider>
                        <div className={'d-flex justify-between'}>
                            <div className="modal__button mr-40">
                                <Button handleClick={handlePrev} className="button__secondary" name="Étape précédente" />
                            </div>
                            <div className="modal__button">
                                <Button handleClick={handleNext} className="button__primary" name="Étape suivante" />
                            </div>
                        </div>
                    </>
                )
            case 5:
                return (
                    <>
                        <div className={'modal__button-skip-step'}>
                            <Button handleClick={handlePrev} className="button__secondary" name="Planifier la publication" />
                        </div>
                        <Divider>OU</Divider>
                        <div className={'d-flex justify-between'}>
                            <div className="modal__button mr-40">
                                <Button handleClick={handlePrev} className="button__secondary" name="Étape précédente" />
                            </div>
                            <div className="modal__button">
                                <Button handleClick={handleNext} className="button__primary" name="Publier l’évenement maintenant" />
                            </div>
                        </div>
                    </>
                )
            default:
                return <></>
        }
    }
    return footer()
}

EventModalFooter.propTypes = {
    data: PropTypes.object,
    handlePreClose: PropTypes.func,
    handlePrev: PropTypes.func,
    handleNext: PropTypes.func,
    step: PropTypes.number,
    contentModalFifth: PropTypes.node
}
export default EventModalFooter
