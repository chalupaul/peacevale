import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import '@fontsource/roboto';
import { ItemShop } from './ItemShop/main';
import { WelcomePage } from './Welcome';
import { Traits } from './Traits';
import { Relics } from './Relics';


export const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/items/:itemType" component={ItemShop} />
      <Route path="/traits" component={Traits} />
      <Route path="/relics" component={Relics} />
      <Redirect from="/items" to="/items/weapons" />
    </Switch>
  )
};