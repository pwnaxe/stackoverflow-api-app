import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from 'react-query';
import { fetchTags } from '../utilities/fetchtags';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Tag', width: 150 },
  { field: 'count', headerName: 'Count', width: 150, type: 'number' },
];

export default function DataTable() {
  const { isLoading, error, data } = useQuery(['fetchTags', 1, 30, 'desc', 'popular'], () => fetchTags(1, 30, 'desc', 'popular'));
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  const rows = data.items.map((item, index) => ({
    id: index,
    name: item.name,
    count: item.count,
  }));
  return (
    <div style={{ height: '80vh', width: '80vw', margin: 'auto', paddingTop: '5rem' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 30, 40, 50, 100]}
        checkboxSelection
      />
    </div>
  );
}
