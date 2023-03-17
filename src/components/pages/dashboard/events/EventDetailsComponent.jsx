import Card from '@components/common/card/Card'
import GlobalGain from '@components/common/globalGain/globalGain'
import Growth from '@components/common/growth/Growth'
import HeaderEvent from '@components/common/headerEvent/HeaderEvent'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const EventDetailsComponent = () => {
    return (
        <Grid className="event-details">
            <Grid className="event-details__wrap-1" item xs={12}>
                <Grid container style={{ height: '100%', width: '50%' }}>
                    <Grid item xs={5} style={{ height: '100%', padding: '10px' }}>
                        <Card />
                    </Grid>
                    <Grid container xs={7} className="caca-wrap">
                        <Grid item xs={12} className="caca" style={{ padding: '10px' }}>
                            <Growth />
                        </Grid>
                        <Grid item xs={12} className="caca" style={{ padding: '10px' }}>
                            <Growth />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container style={{ width: '50%', height: '100%' }}>
                    <Grid style={{ width: '100%', height: '50%', padding: '10px' }}>
                        <GlobalGain />
                    </Grid>
                    <Grid style={{ width: '100%', height: '50%', padding: '10px' }}>
                        <Growth />
                    </Grid>
                </Grid>
            </Grid>
            <HeaderEvent item xs={12} />
            <Grid className="event-details__wrap-2" item xs={12}>
                <Grid container style={{ height: '100%', width: '50%' }}>
                    <Grid item xs={12} style={{ height: '20%', padding: '10px' }}>
                        <h2 style={{ margin: 0 }}>Description</h2>
                    </Grid>
                    <Grid item xs={12} style={{ height: '80%', padding: '10px' }}>
                        <Card />
                    </Grid>
                </Grid>
                <Grid container style={{ height: '100%', width: '50%' }}>
                    <Grid item xs={12} style={{ height: '20%', padding: '10px' }}>
                        <h2 style={{ margin: 0 }}>Informations générales</h2>
                    </Grid>
                    <Grid item xs={12} style={{ height: '26%', padding: '10px' }}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} style={{ height: '26%', padding: '10px' }}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} style={{ height: '26%', padding: '10px' }}>
                        <Growth />
                    </Grid>
                </Grid>
                <Grid container style={{ height: '100%', width: '50%' }}>
                    <Grid item xs={12} style={{ height: '20%', padding: '10px' }}>
                        <h2 style={{ margin: 0 }}>Accessibilité</h2>
                    </Grid>
                    <Grid item xs={12} style={{ height: '80%', padding: '10px' }}>
                        <Card />
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="event-details__wrap-3" item xs={12}>
                <Grid container style={{ height: '100%', width: '55%' }}>
                    <Grid container xs={5} className="caca-wrap" style={{ padding: '10px' }}>
                        <Grid item xs={12} style={{ height: '20%', padding: '10px' }}>
                            <h2 style={{ margin: 0 }}>Cover Picture</h2>
                        </Grid>
                        <Grid item xs={12} style={{ height: '80%' }}>
                            <Card />
                        </Grid>
                    </Grid>
                    <Grid container xs={7} className="caca-wrap" style={{ padding: '10px' }}>
                        <Grid item xs={12} style={{ height: '20%', padding: '10px' }}>
                            <h2 style={{ margin: 0 }}>Accessibilité</h2>
                        </Grid>
                        <Grid item xs={12} style={{ height: '80%' }}>
                            <Growth />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container style={{ width: '45%', height: '100%' }}>
                    <Grid container xs={12} className="caca-wrap" style={{ padding: '10px' }}>
                        <Grid item xs={12} style={{ height: '20%', padding: '10px' }}>
                            <h2 style={{ margin: 0 }}>Style et thèmes</h2>
                        </Grid>
                        <Grid item xs={6} style={{ height: '40%' }}>
                            <Growth />
                        </Grid>
                        <Grid item xs={6} style={{ height: '40%' }}>
                            <Card />
                        </Grid>
                        <Grid item xs={6} style={{ height: '40%' }}>
                            <Card />
                        </Grid>
                        <Grid item xs={6} style={{ height: '40%' }}></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default EventDetailsComponent
