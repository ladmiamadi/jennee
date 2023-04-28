import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { TEAM_LIST } from '@fixtures/teamList'
import Grid from '@mui/material/Unstable_Grid2'
import { Link } from 'react-router-dom'
import { ROUTES } from '@constants/routesConst'
import PropTypes from 'prop-types'
import MoreMembersCard from '@components/pages/dashboard/organization/team/teamCard/MoreMembersCard'

/**
 * @param {boolean} loading data loading status
 * @returns {JSX.Element} - The MoreDetailsMembers component
 */
const MoreDetailsMembers = ({ loading }) => {
    return (
        <>
            <div className={'member__details__comment'}>
                <div className={'member__details__comment__title'}>
                    <Typography variant="h6" gutterBottom>
                        Plus de membres
                    </Typography>
                </div>
            </div>
            <Divider component={'hr'} />
            <Box sx={{ width: '100%', marginTop: '20px' }}>
                <Grid container spacing={10} sx={{ marginTop: '16px' }}>
                    {TEAM_LIST.filter((member, idx) => idx < 3).map((member) => (
                        <Grid key={member.id} xs={'auto'}>
                            <Link to={ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.TEAM.CHILDREN.MEMBER_DETAILS.PATH} state={{ data: member }}>
                                <MoreMembersCard member={member} loading={loading} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

MoreDetailsMembers.prototype = {
    loading: PropTypes.bool
}
export default MoreDetailsMembers
