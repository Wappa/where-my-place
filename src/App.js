import './App.css';

import Grid from '@material-ui/core/Grid';
import Navbar from './Components/Navbar';
import Map from './Components/Map';
import { Container } from '@material-ui/core';
import SearchPage from './Components/Searchelement';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item sm={6}>
          <SearchPage/>
          </Grid>
          <Grid item sm={6}>
            
            <Map />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
