import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
import UnlockIcon from '@assets/images/svg/profile/unlock.svg'
import ProfileProgressBar from '@common/progressBar/ProfileProgressBar'
import ProfileRoundedIcon from '@common/roundedIcon/ProfileRoundedIcon'
import TextArea from '@common/input/TextArea'

/**
 * @param {object} organizationProfile - The organization profile which is displayed
 * @returns {JSX.Element} - The HeaderProfilePage component
 */
const HeaderProfilePage = ({ organizationProfile, isClicked }) => {
    const [editTextArea, setEditTextArea] = useState(isClicked)
    return (
        <div className={'profile__header'}>
            <div className={'profile__header__icon'}>
                <img src={organizationProfile.picture} alt={organizationProfile.name} />
            </div>
            <div className={'profile__header__statistics'}>
                <div className={'profile__header__statistics--interactions'}>
                    <div className={'profile__header__statistics--interactions__content'}>
                        <div className={'profile__header__statistics__title'}>
                            <Typography variant="subtitle1" gutterBottom>
                                Interactions
                            </Typography>
                        </div>
                        <div className={'profile__header__statistics__number'}>{organizationProfile.interactions}</div>
                    </div>
                    <div className={'profile__header__statistics--interactions__icon'}>
                        <VerifiedIcon />
                    </div>
                </div>
                <div className={'profile__header__statistics--siret'}>
                    <div className={'profile__header__statistics--siret__content'}>
                        <div className={'profile__header__statistics__title'}>
                            <Typography variant="subtitle1" gutterBottom>
                                Numéro de SIRET
                            </Typography>
                        </div>
                        <div className={'profile__header__statistics__number'}>{organizationProfile.siretNumber}</div>
                    </div>
                    <div className={'profile__header__statistics--siret__icon'}>
                        <img src={UnlockIcon} alt={'unlock icon'} />
                    </div>
                </div>
            </div>
            <div className={'profile__header__description'}>
                <div className={'profile__header__description__text'}>
                    <div className={'profile__header__statistics__title'}>
                        <Typography variant="subtitle1" gutterBottom>
                            Description
                        </Typography>
                    </div>
                    <div className={'profile__header__description__text__textarea'}>
                        <TextArea
                            onChange={() => console.log('changed')}
                            dataOnChange={{ state: editTextArea, setState: setEditTextArea }}
                            value={organizationProfile.description}
                            isDisabled={!isClicked}
                        />
                    </div>
                </div>
                <div className={'profile__header__description__details'}>
                    <div className={'profile__header__statistics__title'}>
                        <Typography variant="subtitle1" gutterBottom>
                            Détails
                        </Typography>
                    </div>
                    <div className={'profile__header__description__details--progressBar'}>
                        <div>
                            <ProfileProgressBar
                                firstItem={organizationProfile.passedEvents}
                                secondItem={organizationProfile.currentEvents}
                                firstItemClassName={'progress__bar__passedEvents'}
                                secondItemClassName={'progress__bar__currentEvents'}
                            />
                            <div className={'profile__header__description__details__statistics'}>
                                <div className={'profile__header__description__details__statistics--passed'}>
                                    <ProfileRoundedIcon captionText={'Event fini'} className={'profile__rounded__icon--passed'} />
                                    <div>{organizationProfile.passedEvents + ' Events'}</div>
                                </div>
                                <div className={'profile__header__description__details__statistics--passed'}>
                                    <ProfileRoundedIcon captionText={'Event en cours'} className={'profile__rounded__icon--current'} />
                                    <div>{organizationProfile.currentEvents + ' Events'}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ProfileProgressBar
                                firstItem={organizationProfile.receivedTransfers}
                                secondItem={organizationProfile.pendingTransfers}
                                firstItemClassName={'progress__bar__receivedTransfers'}
                                secondItemClassName={'progress__bar__pendingTransfers'}
                            />
                            <div className={'profile__header__description__details__statistics'}>
                                <div className={'profile__header__description__details__statistics--passed'}>
                                    <ProfileRoundedIcon captionText={'Virement perçu'} className={'profile__rounded__icon--received'} />
                                    <div>{organizationProfile.receivedTransfers + '€'}</div>
                                </div>
                                <div className={'profile__header__description__details__statistics--passed'}>
                                    <ProfileRoundedIcon captionText={'Virement en attente'} className={'profile__rounded__icon--pending'} />
                                    <div>{organizationProfile.pendingTransfers + '€'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeaderProfilePage.prototype = {
    organizationProfile: PropTypes.object
}

export default HeaderProfilePage
