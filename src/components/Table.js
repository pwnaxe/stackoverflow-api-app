import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from 'react-query';
import { fetchTags } from '../utilities/fetchtags';
import Button from '@mui/material/Button';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Tag', width: 100 },
  { field: 'count', headerName: 'Count', width: 100, type: 'number' },
];

export default function DataTable() {
  const [fetchEnabled, setFetchEnabled] = React.useState(false);

  const { isLoading, error, data, refetch } = useQuery(
    ['fetchTags', 'desc', 'popular'],
    () => fetchTags('desc', 'popular'),
    {
      enabled: fetchEnabled,
      retry: false,
      refetchOnWindowFocus: false
    }
  );

  const fetchNow = () => {
    setFetchEnabled(true);
    refetch();
  };

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error occurred: {error.message}</>;

  const rows = data?.items.map((item, index) => ({
    id: index,
    name: item.name,
    count: item.count,
  })) || [];

  return (
    <>
      <Button onClick={fetchNow} sx={{ backgroundColor: '#f30490', color: '#fff', margin: 2 }}>
        Download data
      </Button>

      <div style={{ height: '60vh', marginLeft: '5rem', marginRight: '5rem', pt: '5rem', backgroundColor: '#fff', color: 'black' }}>
        <DataGrid
          checkboxSelection
          pageSize={20}
          rowsPerPageOptions={[5, 10, 20, 30, 40, 50, 100]}
          rows={rows}
          columns={columns}
        />
      </div>
    </>
  );
}
