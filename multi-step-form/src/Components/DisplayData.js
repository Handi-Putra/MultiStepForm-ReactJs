import React, { useContext } from 'react'
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table } from '@mui/material';
import { multiStepContext } from '../StepContext'

const DisplayData = () => {
const { finalData } = useContext(multiStepContext);
  return (
    <div>
        <TableContainer style={{ display: 'flex', justifyContent: 'center' }}>
            <Table border="1" style={{ width: '70%', justifyContent: 'center' }} size='small' aria-label='caption label'>
                <TableHead>
                    <TableRow style={{ backgroundColor: 'burlywood', color: 'aliceblue' }}>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Contact Number</TableCell>
                        <TableCell>Email Address</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>District</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Landmark</TableCell>
                        <TableCell>Postal Code</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {finalData.map((data) => (
                        <TableRow key={data.email}>
                            <TableCell>{data.firstName}</TableCell>
                            <TableCell>{data.lastName}</TableCell>
                            <TableCell>{data.contact}</TableCell>
                            <TableCell>{data.email}</TableCell>
                            <TableCell>{data.country}</TableCell>
                            <TableCell>{data.district}</TableCell>
                            <TableCell>{data.city}</TableCell>
                            <TableCell>{data.landMark}</TableCell>
                            <TableCell>{data.postalCode}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default DisplayData