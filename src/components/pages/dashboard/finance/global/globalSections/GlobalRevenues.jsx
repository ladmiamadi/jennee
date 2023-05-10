import React from 'react'
import Dollar from '@assets/images/svg/finance/dollar.svg'
import Money from '@assets/images/svg/finance/money.svg'
import { Typography } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchIcon from '@mui/icons-material/Search'
import FinanceProgressBar from '@common/progressBar/FinanceProgressBar'
import PropTypes from 'prop-types'

/**
 *
 * @param {string} totalRevenues - The total revenues of the organization
 * @param {string} totalExpenses - The total expenses of the organization
 * @param {string} averageRevenuesPerEvent - the average revenues per event for the organization
 * @param {object} detailsRevenues- the list of revenues for the organization
 * @returns {JSX.Element} - The GlobalRevenues component
 */
const GlobalRevenues = ({ totalRevenues, totalExpenses, averageRevenuesPerEvent, detailsRevenues }) => {
    return (
        <div className={'global__revenues'}>
            <div className={'global__revenues__row'}>
                <div className={'global__revenues__row__totalRevenues'}>
                    <div className={'global__revenues__row__totalRevenues__header'}>
                        <Typography variant="subtitle2" gutterBottom>
                            Revenu total
                        </Typography>
                        <div>
                            <img src={Dollar} alt={'Revenues'} />
                        </div>
                    </div>
                    <div className={'global__revenues__row__totalRevenues__revenues'}>
                        <Typography variant="h4" gutterBottom>
                            € {totalRevenues}
                        </Typography>
                    </div>
                    <div className={'global__revenues__row__totalRevenues__growth'}>
                        <Typography variant="caption" display="block" gutterBottom sx={{ color: '#5DA47D' }}>
                            <ArrowUpwardIcon sx={{ fontSize: '14px' }} /> +12.1%
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            Dernier mois
                        </Typography>
                    </div>
                </div>
                <div className={'global__revenues__row__averageRevenues'}>
                    <div className={'global__revenues__row__averageRevenues__header'}>
                        <Typography variant="subtitle2" gutterBottom>
                            Revenu moyen par événement
                        </Typography>
                        <button>
                            Filtres <ExpandMoreIcon />
                        </button>
                    </div>
                    <div className={'global__revenues__row__totalRevenues__revenues'}>
                        <Typography variant="h4" gutterBottom>
                            € {averageRevenuesPerEvent}
                        </Typography>
                    </div>
                    <div className={'global__revenues__row__averageRevenues__growth'}>
                        <Typography variant="caption" display="block" gutterBottom sx={{ color: '#5DA47D' }}>
                            <ArrowUpwardIcon sx={{ fontSize: '14px' }} /> +20%
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            Depuis les 3 derniers événements
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={'global__revenues__row'}>
                <div className={'global__revenues__row__totalExpenses'}>
                    <div className={'global__revenues__row__totalRevenues__header'}>
                        <Typography variant="subtitle2" gutterBottom>
                            Dépense totale
                        </Typography>
                        <div className={'totalExpenses__image'}>
                            <img src={Money} alt={'Dépenses'} />
                        </div>
                    </div>
                    <div className={'global__revenues__row__totalRevenues__revenues'}>
                        <Typography variant="h4" gutterBottom>
                            € {totalExpenses}
                        </Typography>
                    </div>
                    <div className={'global__revenues__row__totalRevenues__growth'}>
                        <Typography variant="caption" display="block" gutterBottom sx={{ color: '#DE7F7C' }}>
                            <ArrowDownwardIcon sx={{ fontSize: '14px' }} /> -18.3%
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            Dernier mois
                        </Typography>
                    </div>
                </div>
                <div className={'global__revenues__row__detailsRevenues'}>
                    <div className={'global__revenues__row__detailsRevenues__header'}>
                        <Typography variant="subtitle2" gutterBottom>
                            Détails de vos revenus
                        </Typography>
                        <div>
                            <SearchIcon />
                        </div>
                    </div>
                    <div className={'global__revenues__row__detailsRevenues__progressBar'}>
                        <FinanceProgressBar className={'progress__bar'} itemsList={detailsRevenues} />
                    </div>
                </div>
            </div>
        </div>
    )
}

GlobalRevenues.prototype = {
    totalRevenues: PropTypes.string,
    totalExpenses: PropTypes.string,
    averageRevenuesPerEvent: PropTypes.string,
    detailsRevenues: PropTypes.object
}
export default GlobalRevenues
