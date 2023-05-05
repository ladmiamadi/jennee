import React, { useState } from 'react'
import { Divider, Typography } from '@mui/material'
import PropTypes from 'prop-types'

/**
 *
 * @param {Array.<Object>}admins - The administrators list
 * @returns {JSX.Element} - The ProfileAssoAdmin component
 */
const ProfileAssoAdmin = ({ admins }) => {
    const [editDetails, setEditDetails] = useState(true)

    return (
        <div className={'profile__content__details__banking'}>
            <Typography variant="h6" gutterBottom className={'profile__content__details__banking__title'}>
                Administrateurs
            </Typography>
            <Divider />
            <div className={'profile__content__details__banking--input'}>
                {admins
                    .filter((item, index) => index < 2)
                    .map((item, id) => {
                        return (
                            <div key={id}>
                                <img src={item.avatar} alt={item.name} />
                                <div>{item.name}</div>
                                <input
                                    name={item.name}
                                    value={item.role}
                                    disabled={editDetails}
                                    style={{ border: !editDetails ? '1px solid #4f5eab' : 'none' }}
                                />
                            </div>
                        )
                    })}

                <div>
                    <div className={'profile__content__details__banking--input--length'}>
                        {admins.length > 2 ? '+ ' + admins.length + ' Membres' : ''}
                    </div>
                </div>
            </div>
            <Divider />
            <button className={'profile__content__details__banking--edit'} onClick={() => setEditDetails(!editDetails)}>
                Edit
            </button>
        </div>
    )
}

ProfileAssoAdmin.prototype = {
    admins: PropTypes.array
}

export default ProfileAssoAdmin
