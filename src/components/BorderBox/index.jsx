import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const BorderBox = styled(Box)(({ theme }) => [
  {
    border: '1px solid #e3e3e3',
    padding: 'max(1rem , 2vw)',
    borderRadius: '10px',
    minHeight: '600px',
  },

  theme.applyStyles('dark', {
    borderColor: '#373636',
  }),
]);

export default BorderBox;
