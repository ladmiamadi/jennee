import React from 'react'

import ProfileNextEvent from '@components/pages/dashboard/organization/profil/profileSections/ProfileNextEvent'
import ProfileJeneeNews from '@components/pages/dashboard/organization/profil/profileSections/ProfileJeneeNews'
import ProfileAsso from '@components/pages/dashboard/organization/profil/profileSections/ProfileAsso'
import { ORGANIZATIONS_LIST } from '@fixtures/organizationsList'
import ProfileBankingInformations from '@components/pages/dashboard/organization/profil/profileSections/ProfileBankingInformations'
import ProfileAssoAdmin from '@components/pages/dashboard/organization/profil/profileSections/ProfileAssoAdmin'
import ProfileBanner from '@components/pages/dashboard/organization/profil/profileSections/ProfileBanner'
import ProfileAssoMembers from '@components/pages/dashboard/organization/profil/profileSections/ProfileAssoMembers'

const ProfilComponent = () => {
    const myOrganization = ORGANIZATIONS_LIST[0]
    return (
        <>
            <div className={'profile__content'}>
                <ProfileBanner banner={myOrganization.banner} profilePicture={myOrganization.profilePicture} />
                <div className={'profile__content__informations'}>
                    <ProfileNextEvent />
                    <ProfileJeneeNews />
                    <ProfileAsso
                        year={myOrganization.year}
                        city={myOrganization.city}
                        membersLength={myOrganization.members.length + myOrganization.admins.length}
                        role={myOrganization.role}
                    />
                </div>
                <div className={'profile__content__details'}>
                    <ProfileBankingInformations bankingInformations={myOrganization.bankingInformations} />
                    <ProfileAssoMembers members={myOrganization.members} />
                    <ProfileAssoAdmin admins={myOrganization.admins} />
                </div>
            </div>
        </>
    )
}

export default ProfilComponent
