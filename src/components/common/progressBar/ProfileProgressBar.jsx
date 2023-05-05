import React from 'react'
import PropTypes from 'prop-types'

/**
 *
 * @param firstItem{number} - The first percentage to display on the progress bar
 * @param secondItem{number} - The second percentage to display on the progress bar
 * @param firstItemClassName {string} - the classname to coloring the first item percentage
 * @param secondItemClassName{string}- the classname to coloring the second item percentage
 * @returns {JSX.Element} - The ProfileProgressBar component
 * @constructor
 */
const ProfileProgressBar = ({ firstItem, secondItem, firstItemClassName, secondItemClassName }) => {
    const totalProgress = firstItem + secondItem
    const progressBarFirstItem = (firstItem / totalProgress) * 100 + '%'
    const progressBarSecondItem = (secondItem / totalProgress) * 100 + '%'

    return (
        <div className="progress__bar">
            <div className={firstItemClassName} style={{ width: progressBarFirstItem }}></div>
            <div className={secondItemClassName} style={{ width: progressBarSecondItem }}></div>
        </div>
    )
}

ProfileProgressBar.prototype = {
    firstItem: PropTypes.number,
    secondItem: PropTypes.number,
    firstItemClassName: PropTypes.string,
    secondItemClassName: PropTypes.string
}

export default ProfileProgressBar
