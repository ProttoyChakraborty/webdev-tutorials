import React from 'react'
import ProfileCard from './components/ProfileCard'
import Patients from './pages/Patients'
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { lime, purple,blue,red} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: "#2196f3",
    secondary: "#f44336",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Patients/>
    </ThemeProvider>
  )
}
export default App