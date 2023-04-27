import React from 'react'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import MemberDetailsContentDescription from '@components/pages/dashboard/organization/team/teamDetails/memberDetailsContent/MemberDetailsContentDescription'
import MemberDetailsContentPersonalInformations from '@components/pages/dashboard/organization/team/teamDetails/memberDetailsContent/MemberDetailsContentPersonalInformations'

/**
 *
 * @param member {object} - the member which is displayed
 * @param editMember {boolean} - the prop to enable editing member
 * @returns {JSX.Element} - The MemberDetailsContent component
 * @constructor
 */
const MemberDetailsContent = ({ member, editMember }) => {
    return (
        <Box className={'member__details'}>
            <MemberDetailsContentDescription member={member} editMember={editMember} />
            <MemberDetailsContentPersonalInformations member={member} editMember={editMember} />
        </Box>
    )
}

MemberDetailsContent.prototype = {
    member: PropTypes.object.isRequired,
    editMember: PropTypes.func
}

export default MemberDetailsContent