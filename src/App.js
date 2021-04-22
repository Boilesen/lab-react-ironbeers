import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Beers from './components/Beers.jsx';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer.jsx';
import Detail from './components/Detail';
import './App.css';
import Card from './components/Card.jsx';

const App = (props) => {
  return (
    <Card titulo="BREJA" color="#f28e1c">
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:id" component={Detail} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    </Card>
  );
};

export default App;
