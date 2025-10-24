import IconButton from '@mui/material/IconButton';
import { useBack } from '../../hooks/useBack';
import ArrowBack from '@mui/icons-material/ArrowBack';

const buttonStyle = {
  alignSelf: { xs: 'flex-start', sm: 'stretch' },
  marginBottom: { xs: '10px', sm: 0 },
};

export default function MoveBackButton({sx}) {
  const moveBack = useBack();

  return (
    <IconButton
      aria-label="nivigate back"
      color="warning"
      onClick={moveBack}
      sx={{...buttonStyle , ...sx}}>
      <ArrowBack />
    </IconButton>
  );
}
