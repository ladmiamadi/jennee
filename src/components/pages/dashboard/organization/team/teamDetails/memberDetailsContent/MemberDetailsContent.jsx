import React, { useState } from 'react'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import MemberDetailsContentDescription from '@components/pages/dashboard/organization/team/teamDetails/memberDetailsContent/MemberDetailsContentDescription'
import MemberDetailsContentPersonalInformations from '@components/pages/dashboard/organization/team/teamDetails/memberDetailsContent/MemberDetailsContentPersonalInformations'
import MoreDetailsMembers from '@components/pages/dashboard/organization/team/teamDetails/memberDetailsContent/MoreDetailsMembers'
import UpdateDetailsMember from '@components/pages/dashboard/organization/team/teamDetails/memberDetailsContent/UpdateDetailsMember'

/**
 * @param member {object} - the member which is displayed
 * @param editMember {boolean} - the prop to enable editing member
 * @returns {JSX.Element} - The MemberDetailsContent component
 * @constructor
 */
const MemberDetailsContent = ({ member, editMember }) => {
    const [editTextarea, setEditTextArea] = useState('')

    const onChange = (state, setState, name, newValue, event) => {
        setState(event.target.value)
    }

    return (
        <Box className={'member__details'}>
            {editMember ? (
                <>
                    <UpdateDetailsMember
                        member={member}
                        dataOnChange={{ state: editTextarea, setState: setEditTextArea, name: 'description' }}
                        onChange={onChange}
                    />
                    <MoreDetailsMembers />
                </>
            ) : (
                <>
                    <MemberDetailsContentDescription
                        member={member}
                        editMember={editMember}
                        dataOnChange={{ state: editTextarea, setState: setEditTextArea, name: 'description' }}
                        onChange={onChange}
                    />
                    <MemberDetailsContentPersonalInformations member={member} />
                </>
            )}
        </Box>
    )
}

MemberDetailsContent.propTypes = {
    member: PropTypes.object.isRequired,
    editMember: PropTypes.bool
}

export default MemberDetailsContent
