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
    const maxItem = Math.max(firstItem, secondItem)
    const minItem = Math.min(firstItem, secondItem)

    let progressBarFirstItem = 0
    let progressBarSecondItem = 0

    if (firstItem <= minItem) {
        progressBarFirstItem = (firstItem / secondItem) * 100 + '%'
        progressBarSecondItem = (1 - firstItem / maxItem) * 100 + '%'
    } else {
        progressBarFirstItem = (1 - secondItem / maxItem) * 100 + '%'
        progressBarSecondItem = (secondItem / firstItem) * 100 + '%'
    }

    return (
        <div className="progress__bar">
            <div className={firstItemClassName} style={{ width: progressBarFirstItem, height: '100%' }}></div>
            <div className={secondItemClassName} style={{ width: progressBarSecondItem, height: '100%' }}></div>
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
