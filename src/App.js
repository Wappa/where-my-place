import './App.css';

import Grid from '@material-ui/core/Grid';
import Navbar from './Components/Navbar';
import Map from './Components/Map';
import Form from './Components/Form';
import { Container } from '@material-ui/core';
import SearchResult from './Components/Searchresults';
import Filter from './Components/Filter';
import { useState } from 'react';

function App() {
  const [lon, setLon] = useState(2.3200410217200766);
  const [lat, setLat] = useState(48.8588897);

  return (
    <div className="App">
      <Navbar />
      <Filter />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <Form setLon={setLon} setLat={setLat} />
            <SearchResult lon={lon} lat={lat} />
          </Grid>
          <Grid item sm={6}>
            <Map lon={lon} lat={lat} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
