import React from 'react'
import { ReactComponent as Rectangle192 } from '@assets/images/svg/features/Rectangle_192.svg'
import { ReactComponent as Rectangle195 } from '@assets/images/svg/features/Rectangle_195.svg'
import { ReactComponent as Rectangle196 } from '@assets/images/svg/features/Rectangle_196.svg'
import Group63 from '@assets/images/svg/features/Group_63(1).svg'
import PageAccueil from '@assets/images/svg/features/PAGE_ACCEUIL(4).svg'

/**
 * React functional component for rendering a layout with SVG and image assets.
 *
 * @returns {JSX.Element} The rendered layout.
 */

export const Layout = () => {
    return (
        <>
            <div className="page__right-rectangle1" style={{ position: 'absolute', zIndex: 1 }}>
                {' '}
                <Rectangle192 />{' '}
            </div>
            <div className="page__right-rectangle2" style={{ position: 'absolute', zIndex: 1 }}>
                {' '}
                <Rectangle195 />{' '}
            </div>
            <div className="page__right-rectangle3" style={{ position: 'absolute', zIndex: 1 }}>
                {' '}
                <Rectangle196 />{' '}
            </div>
            <div className="page__right-phone" style={{ position: 'absolute', zIndex: 3 }}>
                {' '}
                <img src={Group63} alt="" />{' '}
            </div>
            <div className="page__right-image" style={{ position: 'absolute', zIndex: 2 }}>
                {' '}
                <img src={PageAccueil} alt="" />{' '}
            </div>
        </>
    )
}
export default Layout
