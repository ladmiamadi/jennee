import React from 'react'
import { Typography } from '@mui/material'
import InputProfileImageFile from '@common/input/InputProfileImageFile'
import PropTypes from 'prop-types'

/**
 *
 * @param {string} banner- The image file for organization's banner
 * @param profilePicture- The image file for the profile's picture
 * @returns {JSX.Element}- The ProfileBanner component
 * @constructor
 */
const ProfileBanner = ({ banner, profilePicture }) => {
    return (
        <div className={'profile__content__pictures'}>
            <div className={'profile__content__pictures__banner'}>
                <Typography variant="h6" gutterBottom>
                    Votre bannière
                </Typography>
                <InputProfileImageFile alt={'Camera banner'} />
                <div>
                    <img src={banner} alt={'Mon asso banner'} className={'profile__content__pictures__banner--image'} />
                </div>
            </div>
            <div className={'profile__content__pictures__profilePicture'}>
                <Typography variant="h6" gutterBottom>
                    Votre photo de profil
                </Typography>
                <InputProfileImageFile alt={'Camera profile picture'} />
                <div>
                    <img src={banner} alt={'profil'} className={'profile__content__pictures__profilePicture--image'} />
                </div>
            </div>
        </div>
    )
}

ProfileBanner.prototype = {
    banner: PropTypes.string,
    profilePicture: PropTypes.string
}
export default ProfileBanner
