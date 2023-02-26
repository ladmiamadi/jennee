import React from 'react'
import { Outlet } from 'react-router-dom'

const EventsComponent = () => {
    return (
        <div>
            EventsComponent
            <Outlet />
        </div>
    )
}

export default EventsComponent
