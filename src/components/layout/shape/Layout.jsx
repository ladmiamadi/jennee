import React from 'react'
import { ReactComponent as Rectangle192 } from '@assets/images/svg/features/Rectangle_192.svg'
import { ReactComponent as Rectangle195 } from '@assets/images/svg/features/Rectangle_195.svg'
import { ReactComponent as Rectangle196 } from '@assets/images/svg/features/Rectangle_196.svg'
import Group63 from '@assets/images/svg/features/Group_63(1).svg'
import PageAccueil from '@assets/images/svg/features/PAGE_ACCEUIL(4).svg'
import { Box } from '@mui/material'

/**
 * React functional component for rendering a layout with SVG and image assets.
 *
 * @returns {JSX.Element} The rendered layout.
 */

export const Layout = () => {
    return (
        <Box component={'div'} className={'layout'}>
            <div style={{ position: 'absolute' }}>
                <Rectangle192 />
            </div>
            <div style={{ position: 'absolute' }}>
                <Rectangle195 />
            </div>
            <div>
                <Rectangle196 />
            </div>
            <div className="layout__phone" style={{ position: 'absolute', zIndex: 3 }}>
                <img src={Group63} alt="" />
            </div>
            <div className="layout__image" style={{ position: 'absolute', zIndex: 2 }}>
                <img src={PageAccueil} alt="" />
            </div>
        </Box>
    )
}
export default Layout
