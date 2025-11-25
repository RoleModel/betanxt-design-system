import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import { Box, ToggleButton, ToggleButtonGroup, useColorScheme } from '@mui/material'

export function ThemeToggle() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    nextMode: 'light' | 'dark' | 'system' | null
  ) => {
    if (nextMode) setMode(nextMode)
  }

  return (
    <Box sx={{ p: 1.5 }}>
      <ToggleButtonGroup
        size="small"
        exclusive
        fullWidth
        value={mode}
        onChange={handleChange}
        aria-label="Theme mode"
      >
        <ToggleButton value="light" aria-label="Light mode" sx={{ flex: 1, px: 2 }}>
          <LightModeRoundedIcon fontSize="small" sx={{ mr: 1 }} />
          Light
        </ToggleButton>
        <ToggleButton value="system" aria-label="System mode" sx={{ flex: 1, px: 2 }}>
          <SettingsRoundedIcon fontSize="small" sx={{ mr: 1 }} />
          System
        </ToggleButton>
        <ToggleButton value="dark" aria-label="Dark mode" sx={{ flex: 1, px: 2 }}>
          <DarkModeRoundedIcon fontSize="small" sx={{ mr: 1 }} />
          Dark
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}
