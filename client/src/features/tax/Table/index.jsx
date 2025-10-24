import { getTaxesService } from '../../../services/tax';
import Table from '../../core/Table';
import TaxTableHead from './Head';
import TaxTableBody from './Body';

export default function PaymentModeTable() {
  const options = {
    dataKey: 'taxes',
    services: {
      getPaginateDataService: getTaxesService,
    },
    invalidateQueryKeys: ['taxes'],
  };

  return (
    <Table
      resourceName="Taxes"
      options={options}
      hasCheckbox={false}>
      <TaxTableHead />

      <TaxTableBody />
    </Table>
  );
}
