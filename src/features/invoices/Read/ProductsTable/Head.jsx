import SimpleTable from '../../../../components/SimpleTable';


const heads = [
  {
    label: 'Product',
    align: '',
  },
  {
    label: 'Description',
    align: '',
  },
  {
    label: 'Price',
  },
  {
    label: 'Quantity',
  },
  {
    label: 'Total',
  },
];

export default function Head() {
  return <SimpleTable.Head heads={heads} />;
}
