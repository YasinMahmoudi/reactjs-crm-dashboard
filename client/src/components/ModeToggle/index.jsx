import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, useColorScheme } from '@mui/material';

export default function ModeToggle() {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  function handleChangeMode() {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }

  return (
    <IconButton
      onClick={handleChangeMode}
      size="large"
      sx={{ mr: 2 }}
      >
      {mode === 'light' && <DarkModeIcon fontSize='16px' />}
      {mode === 'dark' && <LightModeIcon fontSize='16px' />}
    </IconButton>
  );
}
