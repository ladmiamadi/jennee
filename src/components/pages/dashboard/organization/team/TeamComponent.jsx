import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Link } from 'react-router-dom'
import { ROUTES } from '@constants/routesConst'
import Dropdown from '@shared/dropdown/Dropdown'
import { FILTER_DROPDOWN_LIST_POST } from '@constants/filterDropDownList'
import { Box } from '@mui/material'
import { TEAM_LIST } from '@fixtures/teamList'
import TeamCard from '@components/pages/dashboard/organization/team/teamCard/TeamCard'
import PropTypes from 'prop-types'

/**
 * @param {boolean} loading data loading status
 * @typedef {{id: number, name: string, picture: string, role: string, status: string, description: string }} Member
 * @param {Member} member
 * @returns {JSX.Element}
 */
const TeamComponent = ({ loading }) => {
    return (
        <Box sx={{ marginBottom: '64px' }}>
            <Grid container spacing={6} sx={{ marginTop: '16px' }}>
                {TEAM_LIST.map((member) => (
                    <Grid key={member.id} xs={'auto'}>
                        <Link to={ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.TEAM.CHILDREN.MEMBER_DETAILS.PATH} state={{ data: member }}>
                            <TeamCard member={member} loading={loading} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
            <Dropdown filterList={FILTER_DROPDOWN_LIST_POST} />
        </Box>
    )
}

TeamComponent.prototype = {
    loading: PropTypes.bool
}

export default TeamComponent
