import React, { useState } from 'react'
import { Divider, Typography } from '@mui/material'
import PropTypes from 'prop-types'

/**
 *
 * @param {Object} bankingInformations - The banking information of the organization
 * @returns {JSX.Element} - The ProfileBankingInformations component
 */
const ProfileBankingInformations = ({ bankingInformations }) => {
    const [editDetails, setEditDetails] = useState(true)

    return (
        <div className={'profile__content__details__banking'}>
            <Typography variant="h6" gutterBottom className={'profile__content__details__banking__title'}>
                Informations bancaires
            </Typography>
            <Divider />
            <div className={'profile__content__details__banking--input'}>
                <div>
                    <div>Nom associé au compte</div>
                    <input
                        name={'Name'}
                        value={bankingInformations.name}
                        disabled={editDetails}
                        style={{ border: !editDetails ? '1px solid #4f5eab' : 'none' }}
                    />
                </div>
                <div>
                    <div>BIC</div>
                    <input
                        name={'BIC'}
                        value={bankingInformations.BIC}
                        disabled={editDetails}
                        style={{ border: !editDetails ? '1px solid #4f5eab' : 'none' }}
                    />
                </div>
                <div>
                    <div>RIB</div>
                    <input
                        name={'RIB'}
                        value={bankingInformations.RIB}
                        disabled={editDetails}
                        style={{ border: !editDetails ? '1px solid #4f5eab' : 'none' }}
                    />
                </div>
            </div>
            <Divider />
            <button className={'profile__content__details__banking--edit'} onClick={() => setEditDetails(!editDetails)}>
                Edit
            </button>
        </div>
    )
}

ProfileBankingInformations.prototype = {
    bankingInformations: PropTypes.object
}

export default ProfileBankingInformations
