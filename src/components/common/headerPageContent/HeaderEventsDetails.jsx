import React from 'react'
import * as PropTypes from 'prop-types'
import { Typography, MobileStepper } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { EVENTS_LIST } from '@fixtures/eventsList'
import { ReactComponent as CashSimpleCash } from '@assets/svg/event/Icon-simple-cashapp.svg'
import { ReactComponent as IconCash } from '@assets/svg/event/Icon-cash.svg'

import Cards from '@components/pages/dashboard/events/eventsCard/EventCard'

/**
 A React functional component for rendering header page details
 @returns {JSX.Element} - An input element with the specified props.
 */

const HeaderEventDetails = () => {
    return (
        <div className={'events-details-container__header-infos'}>
            <div className={'events-details-container__header-infos__left-side'}>
                <Cards
                    day={EVENTS_LIST[0].day}
                    month={EVENTS_LIST[0].month}
                    type={EVENTS_LIST[0].type}
                    name={EVENTS_LIST[0].name}
                    picture={EVENTS_LIST[0].picture}
                    info={EVENTS_LIST[0].info}
                    loading={false}
                />

                <div className={'events-details-container__header-infos__left-side__revenues'}>
                    <div className={'events-details-container__header-infos__left-side__revenues-current'}>
                        <Typography component={'h6'} gutterBottom>
                            {' '}
                            Revenu actuel
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            $ 0.00
                        </Typography>
                        <Typography variant="body1">
                            <span>
                                <ArrowUpwardIcon /> + 0%{' '}
                            </span>{' '}
                            Aujourd’hui
                        </Typography>
                    </div>
                    <div className={'events-details-container__header-infos__left-side__revenues-current-amount'}>
                        <Typography variant="h6" gutterBottom>
                            Tickets vendus
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            0 tickets{' '}
                        </Typography>
                        <Typography variant="body1">
                            <span>
                                {' '}
                                <ArrowUpwardIcon /> + 0%{' '}
                            </span>{' '}
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Aujourd'hui
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={'events-details-container__header-infos__right-side'}>
                <div className={'events-details-container__header-infos__right-side__maximum-revenues'}>
                    <div className={'events-details-container__header-infos__right-side__maximum-revenues__icon'}>
                        <CashSimpleCash />
                    </div>
                    <div>
                        <Typography component={'h6'} gutterBottom>
                            Revenu maximum possible
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            $ 13,050.00 From the Event
                        </Typography>
                        <MobileStepper
                            variant="progress"
                            steps={6}
                            position="static"
                            activeStep={1}
                            sx={{ maxWidth: 400, flexGrow: 1 }}
                            nextButton={null}
                            backButton={null}
                        />
                    </div>
                </div>
                <div className={'events-details-container__header-infos__right-side__ticketing-details'}>
                    <div className={'events-details-container__header-infos__right-side__ticketing-details__icon'}>
                        <IconCash />
                    </div>
                    <Typography component={'h6'} gutterBottom>
                        Détails
                    </Typography>
                    <div>
                        <div></div>
                        <div>
                            <Typography>
                                <span></span>Catégorie 1
                            </Typography>
                            <Typography>340 Tickets</Typography>
                        </div>
                    </div>
                    <div>
                        <Typography>
                            <span></span>Catégorie 1
                        </Typography>
                        <Typography>340 Tickets</Typography>
                    </div>
                    <div>
                        <Typography>
                            <span></span>Catégorie 1
                        </Typography>
                        <Typography>340 Tickets</Typography>
                    </div>
                    <div>
                        <Typography>
                            <span></span>Catégorie 1
                        </Typography>
                        <Typography>340 Tickets</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeaderEventDetails.propTypes = {}
export default HeaderEventDetails
