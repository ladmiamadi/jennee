import React from 'react'
import CircleIcon from '@mui/icons-material/Circle'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

/**
 *
 * @param  {Array<Object>} itemsList - The list of items to be displayed on the progress bar
 * @param className - The className of tne progressBar
 * @returns {JSX.Element} - The progress Bar
 */
const FinanceProgressBar = ({ itemsList, className }) => {
    return (
        <>
            <div className={className}>
                {itemsList.map((item, index) => {
                    return <div key={index} style={{ width: item.percentage + '%', height: '100%', backgroundColor: item.color }}></div>
                })}
            </div>
            <div className={'finance__progressBar'}>
                {itemsList.map((item, key) => {
                    return (
                        <div key={key} className={'finance__progressBar--circle'}>
                            <div>
                                <CircleIcon sx={{ color: item.color, fontSize: '15px', marginRight: '10px' }} />
                                <Typography variant="caption" display="block" gutterBottom>
                                    {item.name}
                                </Typography>
                            </div>
                            <div>{item.percentage} %</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

FinanceProgressBar.prototype = {
    className: PropTypes.string,
    itemsList: PropTypes.array
}

export default FinanceProgressBar
