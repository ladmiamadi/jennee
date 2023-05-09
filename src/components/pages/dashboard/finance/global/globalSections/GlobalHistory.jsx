import React from 'react'
import { Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import PropTypes from 'prop-types'
import ProfileProgressBar from '@common/progressBar/ProfileProgressBar'

/**
 *
 * @param {Array<Object>} history - The history  event's revenues for current organization
 * @returns {JSX.Element} - The GlobalHistory component
 */
const GlobalHistory = ({ history }) => {
    return (
        <div className={'global__history'}>
            <Typography variant="subtitle2" gutterBottom>
                Historique
            </Typography>
            <div className={'global__history__events'}>
                {history.map((event, index) => {
                    return (
                        <div className={'global__history__events__item'} key={index}>
                            <div className={'global__history__events__item__header'}>
                                <div className={'global__history__events__item__header--title'}>
                                    <div className={'global__history__events__item__header--title--logo'}>
                                        <img src={event.organizationLogo} alt={event.eventName} />
                                    </div>
                                    <div>
                                        <Typography variant="subtitle2" gutterBottom>
                                            Billetterie {event.eventName}
                                        </Typography>
                                        <Typography variant="caption" display="block" gutterBottom>
                                            {event.collection}
                                        </Typography>
                                    </div>
                                    <MoreHorizIcon />
                                </div>
                                <div className={'global__history__events__item__header__balance'}>
                                    <div className={'global__history__events__item__header__balance--numbers'}>
                                        <Typography variant="subtitle2" gutterBottom sx={{ color: '#5992C6' }}>
                                            € {event.currentBalance}
                                        </Typography>
                                        <Typography variant="subtitle2" gutterBottom>
                                            Total: € {event.total}
                                        </Typography>
                                    </div>
                                    <ProfileProgressBar
                                        firstItem={event.currentBalance}
                                        secondItem={event.total}
                                        firstItemClassName={'progress__bar__financeCurrentBalance'}
                                        secondItemClassName={'progress__bar__financeTotalBalance'}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

GlobalHistory.prototype = {
    history: PropTypes.array.isRequired
}

export default GlobalHistory
