import React from 'react';
import { Switch ,Route } from 'react-router-dom';
import Home from '../Pages/Home'
import Wishes from '../Pages/wishes';


export default function Routes()
{
  return(
  <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/wishes' component={Wishes}/>
  </Switch>
  );
}
