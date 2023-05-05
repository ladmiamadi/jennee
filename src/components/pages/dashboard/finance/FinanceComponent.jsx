import React from 'react'
import HeaderPageContent from '@common/headerPageContent/HeaderPageContent'
import { FINANCES_MENU_ITEMS } from '@constants/menuItemsContentPagesConst'
import { Outlet } from 'react-router-dom'

const FinanceComponent = () => {
    return (
        <>
            <HeaderPageContent title={'Finances'} menuItems={FINANCES_MENU_ITEMS} />
            <Outlet />
        </>
    )
}

export default FinanceComponent
