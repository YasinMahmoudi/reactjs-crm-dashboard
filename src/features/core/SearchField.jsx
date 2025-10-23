import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useSearchParams } from 'react-router';

export default function SearchField({ id }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(function () {
    return searchParams.get('query') || '';
  });

  function handleQueyParam(e) {
    setQuery(e.target.value);

    if (searchParams.has('query') && e.target.value.length === 0) {
      searchParams.delete('query');
      searchParams.delete('page');
      setSearchParams(searchParams);

      return;
    }

    searchParams.set('page', '1');
    searchParams.set('query', e.target.value);

    setSearchParams(searchParams);
  }

  return (
    <TextField
      id={id}
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
