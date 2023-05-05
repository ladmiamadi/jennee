import React from 'react'
import { Typography } from '@mui/material'
import GradientRounded from '@assets/images/organization/profile/gradient-round.png'

const ProfileJeneeNews = () => {
    return (
        <div className={'profile__content__informations__news'}>
            <Typography variant="subtitle1" gutterBottom>
                JeNee News
            </Typography>
            <div className={'profile__content__informations__news__list'}>
                <img src={GradientRounded} alt={'Gradient rounded1'} className={'profile__content__informations__news__list__firstImage'} />
                <img
                    src={GradientRounded}
                    alt={'Gradient rounded2'}
                    className={'profile__content__informations__news__list__secondImage'}
                />
                <img src={GradientRounded} alt={'Gradient rounded3'} className={'profile__content__informations__news__list__thirdImage'} />
                <Typography variant="body1" gutterBottom>
                    J-7 Avant le début de l’Event JeNee
                </Typography>
            </div>
        </div>
    )
}

export default ProfileJeneeNews
