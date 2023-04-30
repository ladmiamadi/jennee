import React, { useState } from 'react'

import { Box } from '@mui/material'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import HeaderDetailsPageContent from '@common/headerPageContent/HeaderDetailsPageContent'
import PropTypes from 'prop-types'
import { ROUTES } from '@constants/routesConst'
import MemberDetailsCard from '@components/pages/dashboard/organization/team/teamCard/MemberDetailsCard'
import MemberDetailsContent from '@components/pages/dashboard/organization/team/teamDetails/memberDetailsContent/MemberDetailsContent'

/**
 *
 * @param handleOpen {function} - The function to be executed when click on edit post
 * @param member {object} - The prop member to be displayed
 * @returns {JSX.Element} - the MemberDetailsComponent  component
 */
const MemberDetailsComponent = ({ handleOpen, member }) => {
    const [editMember, setEditMember] = useState(false)

    console.log(member)
    return (
        <Box sx={{ marginBottom: '64px' }}>
            <HeaderDetailsPageContent
                btnName={editMember ? 'Enregistrer' : 'Modifier les informations'}
                dangerBtnName={'Annuler'}
                backLink={ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.TEAM.HEADER_ROOT}
                handleClick={handleOpen}
                setEditContent={setEditMember}
                editContent={editMember}
            />
            <Box sx={{ marginTop: '35px' }}>
                <Grid container>
                    <Grid item xs={3.5}>
                        <MemberDetailsCard
                            loading={false}
                            picture={member.picture}
                            name={member.name}
                            status={member.status}
                            role={member.role}
                            editMember={editMember}
                        />
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={8}>
                        <MemberDetailsContent member={member} editMember={editMember} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

MemberDetailsComponent.prototype = {
    member: PropTypes.object.isRequired,
    handleOpen: PropTypes.func
}
export default MemberDetailsComponent
