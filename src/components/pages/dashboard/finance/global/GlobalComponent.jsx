import React from 'react'
import { Box } from '@mui/material'
import { FINANCE_LIST } from '@fixtures/financeList'
import GlobalBalance from '@components/pages/dashboard/finance/global/globalSections/GlobalBalance'
import GlobalHistory from '@components/pages/dashboard/finance/global/globalSections/GlobalHistory'
import GlobalRevenues from '@components/pages/dashboard/finance/global/globalSections/GlobalRevenues'
import LastExpensesRevenues from '@components/pages/dashboard/finance/global/globalSections/LastExpensesRevenues'

const GlobalComponent = () => {
    const financeDetails = FINANCE_LIST

    return (
        <Box sx={{ flexGrow: 1, marginTop: '64px' }}>
            <div className={'global__container'}>
                <div className={'global__container--left'}>
                    <GlobalBalance
                        logo={financeDetails.logo}
                        accountBalance={financeDetails.accountBalance}
                        accountNumber={financeDetails.accountNumber}
                        organizationName={financeDetails.organizationName}
                    />
                    <GlobalHistory history={financeDetails.history} />
                </div>
                <div className={'global__container--right'}>
                    <GlobalRevenues
                        totalRevenues={financeDetails.totalRevenues}
                        totalExpenses={financeDetails.totalExpenses}
                        averageRevenuesPerEvent={financeDetails.averageRevenuesPerEvent}
                        detailsRevenues={financeDetails.detailsRevenues}
                    />
                    <LastExpensesRevenues lastExpensesRevenues={financeDetails.lastExpensesAndRevenues} />
                </div>
            </div>
        </Box>
    )
}

export default GlobalComponent
