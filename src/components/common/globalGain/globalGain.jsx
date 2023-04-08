import { Grid } from '@mui/material'
import React from 'react'
import { ReactComponent as GrowthIcon } from '@assets/svg/event/icon-growth-1.svg'

const GlobalGain = () => {
    return (
        <Grid container className="global-gain">
            <Grid item xs={12}>
                <h2>Revenu actuel</h2>
            </Grid>
            <Grid item xs={6} className="global-gain__max">
                <h1>
                    $ 0.00 <span>From the event</span>
                </h1>
            </Grid>
            <Grid item xs={6} className="global-gain__details"></Grid>
            <GrowthIcon className="global-gain__icon" />
        </Grid>
    )
}

export default GlobalGain
