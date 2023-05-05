import React, { useState } from 'react'
import { Divider, Typography } from '@mui/material'
import PropTypes from 'prop-types'

/**
 *
 * @param {Array<Object>} members - The member's list of the organization
 * @returns {JSX.Element} - The ProfileAssoMembers component
 * @constructor
 */
const ProfileAssoMembers = ({ members }) => {
    const [editDetails, setEditDetails] = useState(true)

    return (
        <div className={'profile__content__details__banking'}>
            <Typography variant="h6" gutterBottom className={'profile__content__details__banking__title'}>
                Membres
            </Typography>
            <Divider />
            <div className={'profile__content__details__banking--input'}>
                {members
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
                        {members.length > 2 ? '+ ' + members.length + ' Membres' : ''}
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

ProfileAssoMembers.prototype = {
    members: PropTypes.array
}

export default ProfileAssoMembers
