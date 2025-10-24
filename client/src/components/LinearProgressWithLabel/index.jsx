import {
  Box,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[100],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[900],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.light,
    backgroundImage: `linear-gradient(135deg , ${theme.palette.primary.main}, ${theme.palette.info.light})`,

    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.primary.light,
      backgroundImage: `linear-gradient(135deg , ${theme.palette.primary.main}, ${theme.palette.info.light})`,
    }),
  },
}));

export default function LinearProgressWithLabel(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.5,
      }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Typography
          variant="h6"
          sx={{ color: 'text.secondary' }}>
          {props.title}
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: 'text.secondary' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>

      <Box sx={{ width: '100%' }}>
        <BorderLinearProgress
          variant="determinate"
          {...props}
        />
      </Box>
    </Box>
  );
}
