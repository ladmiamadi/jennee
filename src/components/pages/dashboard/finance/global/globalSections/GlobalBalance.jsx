import React from 'react'
import { Typography } from '@mui/material'
import CardLogo from '@assets/images/finance/cardLogo.png'
import PropTypes from 'prop-types'

/**
 *
 * @param {string} organizationName - The name of the organization which will be displayed on the payment card
 * @param {string} accountNumber- The account number of the organization which will be displayed on the payment card
 * @param {string} logo - The logo of the organization which will be displayed on the payment card
 * @param {string} accountBalance- The current balance of the organization which will be displayed on the payment card
 * @returns {JSX.Element} - The GlobalBalance component
 */
const GlobalBalance = ({ organizationName, accountNumber, logo, accountBalance }) => {
    return (
        <div className={'global__balance'}>
            <div className={'global__balance__header'}>
                <Typography variant="subtitle2" gutterBottom>
                    Solde du compte {organizationName}
                </Typography>
                <img src={CardLogo} alt={'payment card'} />
                <Typography variant="subtitle2" gutterBottom>
                    {accountNumber}
                </Typography>
            </div>
            <div className={'global__balance__amount'}>
                <Typography variant="h3" gutterBottom>
                    € {accountBalance}
                </Typography>
            </div>
            <div className={'global__balance__logo'}>
                <img src={logo} alt={'logo de JeNee'} />
            </div>
        </div>
    )
}

GlobalBalance.prototype = {
    logo: PropTypes.string.isRequired,
    accountBalance: PropTypes.string.isRequired,
    accountNumber: PropTypes.string.isRequired,
    organizationName: PropTypes.string.isRequired
}

export default GlobalBalance
