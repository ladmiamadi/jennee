import React from 'react'
import { Box, Grid } from '@mui/material'
import { FINANCE_LIST } from '@fixtures/financeList'
import GlobalBalance from '@components/pages/dashboard/finance/global/globalSections/GlobalBalance'
import GlobalHistory from '@components/pages/dashboard/finance/global/globalSections/GlobalHistory'
import GlobalRevenues from '@components/pages/dashboard/finance/global/globalSections/GlobalRevenues'

const GlobalComponent = () => {
    const financeDetails = FINANCE_LIST

    return (
        <Box sx={{ flexGrow: 1, marginTop: '64px' }}>
            <Grid container spacing={4}>
                <Grid item xs={3.5}>
                    <GlobalBalance
                        logo={financeDetails.logo}
                        accountBalance={financeDetails.accountBalance}
                        accountNumber={financeDetails.accountNumber}
                        organizationName={financeDetails.organizationName}
                    />
                </Grid>
                <Grid item xs={8.5}>
                    <GlobalRevenues
                        totalRevenues={financeDetails.totalRevenues}
                        totalExpenses={financeDetails.totalExpenses}
                        averageRevenuesPerEvent={financeDetails.averageRevenuesPerEvent}
                        detailsRevenues={financeDetails.detailsRevenues}
                    />
                </Grid>
                <Grid item xs={3.5}>
                    <GlobalHistory history={financeDetails.history} />
                </Grid>
                <Grid item xs={8.5}>
                    section4
                </Grid>
            </Grid>
        </Box>
    )
}

export default GlobalComponent
