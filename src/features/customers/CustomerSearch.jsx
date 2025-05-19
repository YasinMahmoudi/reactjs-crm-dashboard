import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

function CustomerSearch() {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(
    function () {

      if (!query)
        setSearchParams((searchParams) => searchParams.delete('query'));
    },
    [query, setSearchParams]
  );

  function handleQueyParam(e) {
    setQuery(e.target.value);

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
