import {} from '@mui/material'
import Navbar from './Components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardText from './Components/CardText';
import Mainsection from './Components/Mainsection';
import Formfl from './Components/Formfl';



const theme = createTheme({
  palette: {
    primary: {
      main: "#1172C5",
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Navbar/>
    <CardText/>
    <Mainsection/>
    <Formfl/>
    </ThemeProvider>
    </>
  );
}

export default App;
