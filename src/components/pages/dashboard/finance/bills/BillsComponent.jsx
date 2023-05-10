import React from 'react'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import InputSearch from '@common/input/InputSearch'
import { FINANCE_LIST } from '@fixtures/financeList'
import FolderIcon from '@mui/icons-material/Folder'
import LockIcon from '@mui/icons-material/Lock'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const BillsComponent = () => {
    const bills = FINANCE_LIST.bills
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
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <tbody>
                    {bills.map((row, index) => (
                        <TableRow key={index} className={'bills__table__row'}>
                            <TableCell align="center" className={'bills__table__row__col--icon'}>
                                <div>
                                    <FolderIcon />
                                </div>
                            </TableCell>
                            <TableCell align="center" className={'bills__table__row__col--type'}>
                                <div>{row.name}</div>
                            </TableCell>
                            <TableCell align="center" className={'bills__table__row__col--private'}>
                                <div>{row.createdBy === 'ADMINISTRATEUR' ? <LockIcon /> : ''}</div>
                            </TableCell>
                            <TableCell className={'bills__table__row__col--space'}></TableCell>
                            <TableCell align="center" className={'bills__table__row__col--point'}>
                                <div>.</div>
                            </TableCell>
                            <TableCell className={'bills__table__row__col--space'}></TableCell>
                            <TableCell align="center" className={'bills__table__row__col--date'}>
                                <div>{row.date}</div>
                            </TableCell>
                            <TableCell align="center" className={'bills__table__row__col--status'}>
                                <div>{row.createdBy}</div>
                            </TableCell>
                            <TableCell className={'bills__table__row__col--space'}></TableCell>
                            <TableCell className={'bills__table__row__col--action'}>
                                <div>
                                    <ArrowForwardIosIcon />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default BillsComponent
