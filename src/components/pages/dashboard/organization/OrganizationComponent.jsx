import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPageContent from '@common/headerPageContent/HeaderPageContent'
import { ORGANIZATION_MENU_ITEMS } from '@constants/menuItemsContentPagesConst'
const OrganizationComponent = () => {
    return (
        <>
            <HeaderPageContent title={'Mon asso'} menuItems={ORGANIZATION_MENU_ITEMS} handleOpen={() => console.log('clicked')} />
            <Outlet />
        </>
    )
}

export default OrganizationComponent
