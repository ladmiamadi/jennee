import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPageContent from '@common/headerPageContent/HeaderPageContent'
import { ORGANIZATION_MENU_ITEMS } from '@constants/menuItemsContentPagesConst'
import { ORGANIZATIONS_LIST } from '@fixtures/organizationsList'
const OrganizationComponent = () => {
    const organization = ORGANIZATIONS_LIST[0]

    return (
        <>
            <HeaderPageContent
                title={'Mon asso'}
                menuItems={ORGANIZATION_MENU_ITEMS}
                handleOpen={() => console.log('clicked')}
                organization={organization}
            />
            <Outlet />
        </>
    )
}

export default OrganizationComponent
