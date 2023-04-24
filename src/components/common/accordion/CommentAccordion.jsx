import React, { useState } from 'react'
import Button from '@common/button/Button'
import { Divider } from '@mui/material'
import { ReactComponent as PostCommentAvatar } from '@assets/svg/post/post-comments-avatar.svg'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ReplyAllIcon from '@mui/icons-material/ReplyAll'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ReplyForm from '@common/form/Post/ReplyForm'

const CommentAccordion = ({ comment }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <div>
                {isActive ? (
                    <Button className={'accordion--close'} name={'Fermer'} onClick={() => setIsActive(!isActive)} />
                ) : (
                    <Button className={'accordion--open'} name={'Ouvrir'} onClick={() => setIsActive(!isActive)} />
                )}
            </div>
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

export default CommentAccordion
