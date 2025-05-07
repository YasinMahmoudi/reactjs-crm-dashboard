/* eslint-disable react/prop-types */
import { Autocomplete, Box, Button, Grid, TextField } from '@mui/material';
import EnhancedModal from '../../components/Modal';
import { countries } from '../../data/countries';

export default function CustomerCreateModal() {
  return (
    <EnhancedModal title="Add new customer">
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 1, sm: 4 }}>
        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            size=""
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          <Autocomplete
            id="country"
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              return (
                <Box
                  key={key}
                  component="li"
                  sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                  {...optionProps}>
                  <img
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    alt=""
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a country"
                slotProps={{
                  htmlInput: {
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  },
                }}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 4 }}>
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          <Button
            variant="contained"
            color="info"
            sx={{ width: { xs: '100%', sm: 'auto' } }}>
            Add User
          </Button>
        </Grid>
      </Grid>
    </EnhancedModal>
  );
}
