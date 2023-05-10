import React from 'react'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { FINANCE_LIST } from '@fixtures/financeList'
import InputSearch from '@common/input/InputSearch'

const RevenuesComponent = () => {
    const expenses = FINANCE_LIST.revenues
    return (
        <div className={'revenues__table'}>
            <Table>
                <TableHead className={'revenues__table__header'}>
                    <TableRow>
                        <TableCell>
                            <InputSearch
                                display={true}
                                placeholder={'Recherche'}
                                handleChange={() => ''}
                                value={''}
                                onChange={() => ''}
                                dataOnChange={{}}
                            />
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell align="center">Création</TableCell>
                        <TableCell align="center">Event</TableCell>
                        <TableCell align="center">Statut</TableCell>
                        <TableCell align="center">Montant</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <tbody>
                    {expenses.map((row, index) => (
                        <TableRow key={index} className={'revenues__table__row'}>
                            <TableCell align="center" className={'revenues__table__row__col--icon'}>
                                <div>
                                    <div>
                                        <img src={row.organizationLogo} alt={row.name} />
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="center" className={'revenues__table__row__col--type'}>
                                <div>{row.type}</div>
                            </TableCell>
                            <TableCell align="center" className={'revenues__table__row__col--point'}>
                                <div>.</div>
                            </TableCell>
                            <TableCell align="center" className={'revenues__table__row__col--date'}>
                                <div>{row.date}</div>
                            </TableCell>
                            <TableCell align="center" className={'revenues__table__row__col--event'}>
                                <div>{row.event}</div>
                            </TableCell>
                            <TableCell align="center" className={'revenues__table__row__col--status'}>
                                <div>{row.status}</div>
                            </TableCell>
                            <TableCell align="center" className={'revenues__table__row__col--amount'}>
                                <div>{row.amount}</div>
                            </TableCell>
                            <TableCell className={'revenues__table__row__col--action'}></TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default RevenuesComponent
