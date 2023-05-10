import React from 'react'
import { Typography } from '@mui/material'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import PropTypes from 'prop-types'

/**
 *
 * @param {Object} lastExpensesRevenues - The list of last expenses and revenues to be displayed
 * @returns {JSX.Element} - The LastExpensesRevenues component
 */
const LastExpensesRevenues = ({ lastExpensesRevenues }) => {
    return (
        <div className={'global__expensesRevenues'}>
            <div className={'global__expensesRevenues__header'}>
                <Typography variant="subtitle2" gutterBottom>
                    Dernières dépenses revenues
                </Typography>
            </div>
            <div className={'global__expensesRevenues__table'}>
                <Table>
                    <TableHead className={'global__expensesRevenues__table__header'}>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center">Type</TableCell>
                            <TableCell></TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Event</TableCell>
                            <TableCell align="center">Statut</TableCell>
                            <TableCell align="center">Montant</TableCell>
                        </TableRow>
                    </TableHead>
                    <tbody>
                        {lastExpensesRevenues.map((row, index) => (
                            <TableRow key={index} className={'global__expensesRevenues__table__row'}>
                                <TableCell align="center" className={'global__expensesRevenues__table__row__col--icon'}>
                                    <div>
                                        <NorthEastIcon />
                                    </div>
                                </TableCell>
                                <TableCell align="center" className={'global__expensesRevenues__table__row__col--type'}>
                                    <div>{row.type}</div>
                                </TableCell>
                                <TableCell align="center" className={'global__expensesRevenues__table__row__col--point'}>
                                    <div>.</div>
                                </TableCell>
                                <TableCell align="center" className={'global__expensesRevenues__table__row__col--date'}>
                                    <div>{row.date}</div>
                                </TableCell>
                                <TableCell align="center" className={'global__expensesRevenues__table__row__col--event'}>
                                    <div>{row.event}</div>
                                </TableCell>
                                <TableCell align="center" className={'global__expensesRevenues__table__row__col--status'}>
                                    <div>{row.status}</div>
                                </TableCell>
                                <TableCell align="center" className={'global__expensesRevenues__table__row__col--amount'}>
                                    <div>{row.amount}</div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

LastExpensesRevenues.prototype = {
    lastExpensesRevenues: PropTypes.object
}
export default LastExpensesRevenues
