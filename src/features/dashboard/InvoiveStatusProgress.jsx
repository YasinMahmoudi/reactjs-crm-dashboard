import { Paper } from '@mui/material';
import LinearProgressWithLabel from '../../components/LinearProgressWithLabel';

export default function InvoiveStatusProgress() {
  return <Paper sx={{ mt: 10 , p:5 }}>
    <LinearProgressWithLabel  value={60}/>
  </Paper>;
}


