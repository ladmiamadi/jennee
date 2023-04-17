import HeaderPageContent from '@common/headerPageContent/HeaderPageContent'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { EVENT_MENU_ITEMS } from '@constants/menuItemsContentPagesConst'
import Cards from '@components/pages/dashboard/events/eventsCard/EventCard'
import Grid from '@mui/material/Unstable_Grid2'
import { EVENTS_LIST } from '@fixtures/eventsList'
import { Box } from '@mui/material'
import { ROUTES } from '@constants/routesConst'
import Dropdown from '@shared/dropdown/Dropdown'
import { FILTER_DROPDOWN_LIST_EVENT } from '@constants/filterDropDownList'

/**
 The component for Event page
 @typedef {Object} Props
 @property {function} loading - boolean for loading.
 @property {boolean} handleOpen - function for open modal.
 @returns {JSX.Element} The EventsPageComponent component.
 */
const EventsComponent = ({ handleOpen, loading }) => {
    return (
        <Box sx={{ marginBottom: '64px' }}>
            <HeaderPageContent
                title={'Mes events'}
                menuItems={EVENT_MENU_ITEMS}
                handleClick={handleOpen}
                btnName={'Créer un nouvel event'}
            />
            <Grid container spacing={6} sx={{ marginTop: '16px' }}>
                {EVENTS_LIST.map((event) => (
                    <Grid key={event.id} xs={'auto'}>
                        <Link to={ROUTES.DASHBOARD.EVENTS.CHILDREN.EVENTS_DETAILS.PATH}>
                            <Cards
                                day={event.day}
                                month={event.month}
                                type={event.type}
                                name={event.name}
                                picture={event.picture}
                                info={event.info}
                                loading={loading}
                            />
                        </Link>
                    </Grid>
                ))}
            </Grid>

            <Dropdown filterList={FILTER_DROPDOWN_LIST_EVENT} />
        </Box>
    )
}

EventsComponent.propTypes = {
    handleOpen: PropTypes.func,
    loading: PropTypes.bool
}

export default EventsComponent
