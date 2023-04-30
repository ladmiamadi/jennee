import React from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined'
import SendIcon from '@mui/icons-material/Send'
import PropTypes from 'prop-types'

/**
 *
 * @param className {string} - The name of the style class
 * @param handleSubmit {function} - The function to be executed when submit the form
 * @param user {string}- The name of the user who is commenting the post
 * @returns {JSX.Element} - The ReplyForm component
 * @constructor
 */
const ReplyForm = ({ className, handleSubmit, user }) => {
    return (
        <>
            <form name={name} className={'reply'} onSubmit={handleSubmit} noValidate>
                <div className={'reply--emoji'}>
                    <EmojiEmotionsOutlinedIcon />
                </div>
                <div className={'reply__input'}>
                    <input name={name} className={className} placeholder={`| Répondre à ${user}`} type="text" required={false} />
                </div>
                <div className={'reply--send'}>
                    <button>
                        <SendIcon />
                    </button>
                </div>
            </form>
        </>
    )
}

ReplyForm.propTypes = {
    className: PropTypes.string,
    handleSubmit: PropTypes.func,
    user: PropTypes.string
}
export default ReplyForm
