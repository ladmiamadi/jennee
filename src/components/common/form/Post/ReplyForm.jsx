import React from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined'
import SendIcon from '@mui/icons-material/Send'

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

export default ReplyForm
