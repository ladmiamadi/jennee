import React, { useState } from 'react'
import Button from '@common/button/Button'
import { Divider } from '@mui/material'
import { ReactComponent as PostCommentAvatar } from '@assets/svg/post/post-comments-avatar.svg'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ReplyAllIcon from '@mui/icons-material/ReplyAll'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ReplyForm from '@common/form/Post/ReplyForm'
import PropTypes from 'prop-types'

/**
 *
 * @param comment {Object} - The post.comment object with all attributes to be displayed
 * @param editPost {boolean} - The prop to enable edit post form
 * @returns {JSX.Element} - The CommentAccordion component
 * @constructor
 */
const CommentAccordion = ({ comment, editPost }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            {editPost ? (
                <Button className={'accordion--close'} name={'Supprimer'} />
            ) : (
                <div>
                    {isActive ? (
                        <Button className={'accordion--close'} name={'Fermer'} handleClick={() => setIsActive(!isActive)} />
                    ) : (
                        <Button className={'accordion--open'} name={'Ouvrir'} handleClick={() => setIsActive(!isActive)} />
                    )}
                </div>
            )}

            {isActive && (
                <div className="accordion__content">
                    <Divider component={'hr'} />
                    <div className={'accordion__content__comments'}>
                        <div className={'accordion__content__comments__mainComment'}>
                            <div>
                                <PostCommentAvatar />
                            </div>
                            <div>
                                <div className={'accordion__content__comments__mainComment__userItem'}>
                                    <span className={'accordion__content__comments__mainComment__userItem__user'}>{comment.user}</span>{' '}
                                    {comment.comment}
                                </div>
                            </div>
                            <div className={'accordion__content__comments__mainComment--userLikes'}>
                                <div>
                                    <FavoriteIcon className={'accordion__content__comments__mainComment--userLikes--icon'} />
                                </div>
                                <div className={'accordion__content__comments__mainComment--userLikes--number'}>{comment.likes}</div>
                            </div>
                        </div>
                        {comment.replies.map((reply, index) => (
                            <div className={'accordion__content__comments__mainComment--replies'} key={index}>
                                <div>
                                    <ReplyAllIcon />
                                </div>
                                <div className={'accordion__content__comments__mainComment--replies__item'}>
                                    <div>
                                        <PostCommentAvatar />
                                    </div>
                                    <div className={'accordion__content__comments__mainComment--replies__item__userItem'}>
                                        <span className={'accordion__content__comments__mainComment__userItem__user'}>{reply.user}</span>{' '}
                                        {reply.message}
                                    </div>
                                    <div className={'accordion__content__comments__mainComment--replies__item--favorite'}>
                                        <div>
                                            <FavoriteBorderIcon className={''} />
                                        </div>
                                        <div className={'accordion__content__comments__mainComment--userLikes--number'}>{reply.likes}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ReplyForm user={comment.user} />
                </div>
            )}
        </>
    )
}
CommentAccordion.propTypes = {
    comment: PropTypes.object,
    editPost: PropTypes.bool
}
export default CommentAccordion
