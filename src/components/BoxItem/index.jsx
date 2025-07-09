import { Paper, styled } from "@mui/material";


export const BoxItem = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  maxWidth: '100%',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  flex: '100%',

  [`@media screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
    flex: 1,
  },
}));
