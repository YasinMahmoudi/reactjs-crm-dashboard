import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

function CustomerSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(function () {
    return searchParams.get('query') || '';
  });

  useEffect(
    function () {
      if (searchParams.has('query') && searchParams.get('query').length < 1) {
        searchParams.delete('query');
        setSearchParams(searchParams);
      }
    },
    [searchParams, query, setSearchParams]
  );

  function handleQueyParam(e) {
    setQuery(e.target.value);

    searchParams.set('page', '1');
    searchParams.set('query', e.target.value);

    setSearchParams(searchParams);
  }

  return (
    <TextField
      id="standard-password-input"
      label="Search"
      type="search"
      variant="outlined"
      size="small"
      sx={{
        order: { xs: '3', sm: '0' },
        flexGrow: { xs: '1', sm: 'initial' },
        marginTop: { xs: '8px', sm: '0' },
        width: { xs: '100%', sm: 'auto' },
      }}
      value={query}
      onChange={handleQueyParam}
    />
  );
}

export default CustomerSearch;
