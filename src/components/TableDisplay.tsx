import { Paper, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface TableDisplayProps {
    rows: GridRowsProp;
    columns: GridColDef[];
}

const TableDisplay = ({ rows, columns }: TableDisplayProps) => {
    return (
        <div className="p-8 mx-auto max-w-6xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Example Table Display</h1>
                <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
            </div>

            <Box
                sx={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                }}
            >
                <Paper
                    sx={{
                        height: 400,
                        width: '100%',
                        borderRadius: '12px',
                    }}
                    elevation={0}
                >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSizeOptions={[5, 10, 25]}
                        // checkboxSelection
                        disableRowSelectionOnClick                        
                        sx={{
                            textAlign: 'center',
                            border: 0,
                            '& .MuiDataGrid-columnHeaders': {
                                backgroundColor: '#f8fafc',
                                color: '#475569',
                                fontSize: '0.875rem',
                                fontWeight: 'bold',
                            },
                            '& .MuiDataGrid-cell:focus': {
                                outline: 'none',
                            },
                            '& .MuiDataGrid-row:hover': {
                                backgroundColor: '#f1f5f9',
                            },
                            '& .MuiDataGrid-toolbarContainer': {
                                padding: '16px 12px',
                            },
                            '& .MuiDataGrid-footerContainer': {
                                borderTop: '1px solid #e2e8f0',
                            },
                        }}
                    />
                </Paper>
            </Box>

            <div className="mt-4 text-sm text-gray-500 text-right">
                <p>Data last updated: March 12, 2025</p>
            </div>
        </div>
    );
};

export default TableDisplay;