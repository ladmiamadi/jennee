import { Grid } from '@mui/material'
import React from 'react'
import { ReactComponent as GrowthIcon } from '@assets/svg/event/icon-growth-1.svg'

const Growth = () => {
    return (
        <Grid container className="growth">
            <Grid item xs={12}>
                <h2>Revenu actuel</h2>
            </Grid>
            <Grid item xs={12}>
                <h1>$ 0.00</h1>
            </Grid>
            <Grid item xs={6} className="growth__details">
                <p>+ 0 % </p>
                <span>Aujourdhui</span>
            </Grid>
            <GrowthIcon className="growth__icon" />
        </Grid>
    )
}

export default Growth
