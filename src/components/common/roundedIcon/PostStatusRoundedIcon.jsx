import React from 'react'

import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded'
const PostStatusRoundedIcon = ({ className, status }) => {
    return <Brightness1RoundedIcon color={status === 'En ligne' ? 'success' : 'secondary'} fontSize={'small'} className={className} />
}

export default PostStatusRoundedIcon
