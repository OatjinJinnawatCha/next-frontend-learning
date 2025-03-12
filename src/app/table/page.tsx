import { Paper, Typography, } from '@mui/material'
import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

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
        <div className='px-8 py-4 mx-auto'>
            <h1 className='text-2xl py-3 font-bold'>DataGrid Display</h1>
            <DataGrid
                rows={dataRows}
                columns={dataColumns}
                pageSizeOptions={[5, 10, 25]}
                checkboxSelection
                disableRowSelectionOnClick
                sx={{
                    backgroundColor: 'white',
                    textAlign: 'center',
                    height: 400,
                    width: '100%',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid #e2e8f0',
                }}
            />
        </div>
    )
}