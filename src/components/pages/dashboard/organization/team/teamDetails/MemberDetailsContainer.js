import React from 'react'

import { useLocation } from 'react-router-dom'
import MemberDetailsComponent from '@components/pages/dashboard/organization/team/teamDetails/MemberDetailsComponent'

/**
 *
 * @returns {JSX.Element} - The MemberDetailsContainer component
 */
const MemberDetailsContainer = () => {
    const location = useLocation()
    const member = location.state?.data

    return <MemberDetailsComponent member={member} />
}

export default MemberDetailsContainer
