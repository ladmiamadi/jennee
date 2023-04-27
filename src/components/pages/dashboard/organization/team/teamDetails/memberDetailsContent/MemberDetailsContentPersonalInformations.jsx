import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { COMMENTS_LIST } from '../../../../../../../fixtures/commentsList'
import { ReactComponent as PostCommentAvatar } from '@assets/svg/post/post-comments-avatar.svg'
import CommentAccordion from '@common/accordion/CommentAccordion'
import PropTypes from 'prop-types'
import Button from '@common/button/Button'

/**
 * @param member {object} - the member object to be displayed with details
 * @param editMember {boolean} - the prop to enable editing member
 * @param handleClick {function} - The function to be executed when clicking on update button
 * @returns {JSX.Element} - The MemberDetailsContentPersonalInformations component
 * @constructor
 */
const MemberDetailsContentPersonalInformations = ({ member, editMember, handleClick }) => {
    return (
        <>
            <div className={'member__details__comment'}>
                <div className={'member__details__comment__title'}>
                    <Typography variant="h6" gutterBottom>
                        Informations Personnels
                    </Typography>
                </div>
            </div>
            <Divider component={'hr'} />
            <Box sx={{ width: '100%', marginTop: '20px' }}>
                <div className={'member__details__informations'}>
                    <div className={'member__details__informations__item'}>
                        <div className={'member__details__informations__item--avatar'}>
                            <PostCommentAvatar />
                        </div>
                        <div className={'member__details__informations__item--user'}>Adresse Mail</div>
                        <div className={'member__details__informations__item--point'}>.</div>
                        <div className={'member__details__informations__item--reply'}>{member.email}</div>
                        <Button name={'Modifier'} className={'btn--primary'} handleClick={handleClick} />
                    </div>
                </div>
                <div className={'member__details__informations'}>
                    <div className={'member__details__informations__item'}>
                        <div className={'member__details__informations__item--avatar'}>
                            <PostCommentAvatar />
                        </div>
                        <div className={'member__details__informations__item--user'}>{"Nom d'utilisateur"}</div>
                        <div className={'member__details__informations__item--point'}>.</div>
                        <div className={'member__details__informations__item--reply'}>{member.userName}</div>
                        <Button name={'Modifier'} className={'btn--primary'} handleClick={handleClick} />
                    </div>
                </div>
                <div className={'member__details__informations'}>
                    <div className={'member__details__informations__item'}>
                        <div className={'member__details__informations__item--avatar'}>
                            <PostCommentAvatar />
                        </div>
                        <div className={'member__details__informations__item--user'}>Date de naissance</div>
                        <div className={'member__details__informations__item--point'}>.</div>
                        <div className={'member__details__informations__item--reply'}>{member.birthDate}</div>
                        <Button name={'Modifier'} className={'btn--primary'} handleClick={handleClick} />
                    </div>
                </div>
            </Box>
        </>
    )
}

MemberDetailsContentPersonalInformations.prototype = {
    member: PropTypes.object.isRequired,
    editMember: PropTypes.bool.isRequired,
    handleClick: PropTypes.func
}
export default MemberDetailsContentPersonalInformations
