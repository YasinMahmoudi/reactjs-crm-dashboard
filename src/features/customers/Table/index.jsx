import DataTable from "../../../components/Table";
import { deleteCustomerService, deleteManyCustomersService, getCustomersService } from "../../../services/customers/customer";
import Table from "../../core/Table";
import CustomerTableBody from "../CustomerTableBody";


const headCells = [
  {
    id: 'name',
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'country',
    disablePadding: false,
    label: 'Country',
  },
  {
    id: 'address',
    disablePadding: false,
    label: 'Address',
  },
  {
    id: 'phone',
    disablePadding: true,
    label: 'Phone',
  },
  {
    id: 'email',
    disablePadding: false,
    label: 'Email',
  },

  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: '',
  },
];

export default function CustomersTable() {

  const options = {
    dataKey: 'customers',
    services: {
      getPaginateDataService: getCustomersService,
      deleteDataService: deleteCustomerService,
      deleteManyDataService: deleteManyCustomersService,
    },
    invalidateQueryKeys: ['customers'],
  }


  return (
    <Table resourceName="Customer" options={options}>
      <DataTable.Head headCells={headCells}  />

      <CustomerTableBody />
    </Table>
  );
}
