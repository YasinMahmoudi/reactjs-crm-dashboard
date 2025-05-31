import  Box  from '@mui/material/Box';
import { blue } from '@mui/material/colors';

const overlayStyle = {
  width: '100%',
  height: '100%',
  bgcolor: blue[50],
  position: 'absolute',
  top: '0',
  left: '0',
  opacity: '.4',
  zIndex: '10',
  cursor: 'not-allowed',
};

export default function Overlay() {
  return <Box sx={overlayStyle} />;
}
