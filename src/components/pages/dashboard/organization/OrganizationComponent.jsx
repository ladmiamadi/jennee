import React from 'react'
import HeaderPageContent from '@common/headerPageContent/HeaderPageContent'
import { ORGANIZATION_MENU_ITEMS } from '@constants/menuItemsContentPagesConst'
import PostsContainer from '@components/pages/dashboard/organization/posts/PostsContainer'

const OrganizationComponent = () => {
    return (
        <div>
            <HeaderPageContent
                title={'Mon asso'}
                menuItems={ORGANIZATION_MENU_ITEMS}
                handleOpen={() => console.log('clicked')}
                btnName={'Publier un post'}
            />
            <PostsContainer />
        </div>
    )
}

export default OrganizationComponent
