import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import SingleCocktail from './pages/SingleCocktail'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route path='/cocktail/:id'>
        <SingleCocktail/>
      </Route>
      <Route path="*">
        <Error/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
