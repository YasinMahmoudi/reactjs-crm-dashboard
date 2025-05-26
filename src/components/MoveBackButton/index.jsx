import { IconButton } from '@mui/material';
import { useBack } from '../../hooks/useBack';
import { ArrowBack } from '@mui/icons-material';

export default function MoveBackButton() {
  const moveBack = useBack();

  return (
    <IconButton
      aria-label="nivigate back"
      color="warning"
      onClick={moveBack}
      sx={{
        alignSelf: { xs: 'flex-start', sm: 'stretch' },
        marginBottom: { xs: '10px', sm: 0 },
      }}>
      <ArrowBack />
    </IconButton>
  );
}
