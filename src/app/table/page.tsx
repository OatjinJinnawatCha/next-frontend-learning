import { Paper, } from '@mui/material'
import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TableDisplay from '../../components/TableDisplay'

export default function page() {
    const dataRows = [
        { id: 1, name: 'Alice', age: 30, status: 'Active' },
        { id: 2, name: 'Bob', age: 28, status: 'Inactive' },
        { id: 3, name: 'Charlie', age: 32, status: 'Active' },
    ];
    const dataColumns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'age', headerName: 'Age', width: 150 },
        { field:'status', headerName: 'Status', width: 150 }
    ];
    return (
        <div className='p-4 mx-auto'>
            <TableDisplay rows={dataRows} columns={dataColumns}/>
        </div>
    )
}