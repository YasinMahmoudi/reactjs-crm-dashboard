import DataTable from '../../components/Table';

function createData(id, name, country, address, phone, email) {
  return {
    id,
    name,
    country,
    address,
    phone,
    email,
  };
}

const rows = [
  createData(
    1,
    'User',
    'United States',
    'california',
    '+1 123 234',
    'user@gmail.com'
  ),
  createData(
    2,
    'User',
    'United States',
    'california',
    '+1 123 234',
    'user@gmail.com'
  ),
  createData(
    3,
    'User',
    'United States',
    'california',
    '+1 123 234',
    'user@gmail.com'
  ),
  createData(
    4,
    'User',
    'United States',
    'california',
    '+1 123 234',
    'user@gmail.com'
  ),
  createData(
    5,
    'User',
    'United States',
    'california',
    '+1 123 234',
    'user@gmail.com'
  ),
  createData(
    6,
    'User',
    'United States',
    'california',
    '+1 123 234',
    'user@gmail.com'
  ),
  createData(
    7,
    'User',
    'United States',
    'california',
    '+1 123 234',
    'user@gmail.com'
  ),
  createData(
    8,
    'User',
    'United States',
    'california',
    '+1 123 234',
    'user@gmail.com'
  ),
  createData(
    9,
    'User',
    'United States',
    'california',
    '+1 123 234',
    'user@gmail.com'
  ),
  createData(
    10,
    'User',
    'United States',
    'california',
    '+1 123 234',
    'user@gmail.com'
  ),
  createData(
    11,
    'User',
    'United States',
    'california',
    '+1 123 234',
    'user@gmail.com'
  ),
  createData(
    12,
    'User',
    'United States',
    'california',
    '+1 123 234',
    'user@gmail.com'
  ),
  createData(
    13,
    'User',
    'United States',
    'california',
    '+1 123 234',
    'user@gmail.com'
  ),
];

export default function CustomersTable() {
  return (
    <DataTable
      data={rows}
      hasPagination={true}>
      <DataTable.Head />
      <DataTable.Body
        render={(row) => (
          <DataTable.Row
            key={row.id}
            row={row}
          />
        )}
      />
    </DataTable>
  );
}
