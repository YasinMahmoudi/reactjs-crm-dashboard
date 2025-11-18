import { Button, Divider, Grid, Typography } from '@mui/material';
import { BoxItem } from '../BoxItem';
import { GitHub } from '@mui/icons-material';

export default function AboutMe() {
  return (
    <Grid
      container
      columns={12}>
      <Grid
        size={{ xs: 12, sm: 6 }}
        mx="auto">
        {' '}
        <BoxItem>
          <Typography variant="h5"> About Me </Typography>

          <Typography
            variant="body1"
            sx={{ mt: 1 }}>
            If you have any questions or suggestions about this app, please
            don&apos;t hesitate to reach out to me. You can find my contact
            information below. I&apos;ll be glad to recieve your feedback and
            suggestions. 😊
          </Typography>

          <Divider
            variant="fullWidth"
            sx={{ my: 1 }}
          />

          <Typography>
            If you like this project , you can checkout my{' '}
            <Button
              variant="contained"
              size="small"
              href="https://github.com/YasinMahmoudi/reactjs-crm-dashboard"
              target="_blank">
              <GitHub />
              github
            </Button>{' '}
            to access source code and give it a star <a href=""></a>.
          </Typography>
        </BoxItem>
      </Grid>
    </Grid>
  );
}
