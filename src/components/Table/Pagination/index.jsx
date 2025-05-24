import PropTypes from 'prop-types';
import { useTable } from '..';
import { useSearchParams } from 'react-router';
import { Pagination as TablePagination, Stack } from '@mui/material';

Pagination.propTypes = {
  data: PropTypes.array,
  pagination: PropTypes.object,
};

export default function Pagination() {
  const { pagination } = useTable();

  const { page, pages: count } = pagination;

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(page);

  function handleChange(_e, value) {
    searchParams.set('page', value);
    setSearchParams(searchParams);
  }

  return (
    <Stack
      width={'100%'}
      borderTop={1}
      borderColor={'#e3e3e3'}
      sx={{
        padding: '1.25rem',
        alignItems: 'flex-end',
      }}>
      <TablePagination
        count={count}
        page={currentPage}
        shape="rounded"
        onChange={handleChange}
        color="primary"
      />
    </Stack>
  );
}
