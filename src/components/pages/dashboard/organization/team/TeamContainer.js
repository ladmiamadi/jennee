import React, { useState } from 'react'
import TeamComponent from '@components/pages/dashboard/organization/team/TeamComponent'

const TeamContainer = () => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 2000)

    return <TeamComponent loading={loading} />
}

export default TeamContainer
