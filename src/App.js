import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import '@fontsource/roboto';
import { ItemShop } from './ItemShop/main';
import { WelcomePage } from './Welcome';
import { Traits } from './Traits';
import { Relics } from './Relics';
import { Chargen } from './Chargen';
import { Rules } from './Rules';

export const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/items/:itemType" component={ItemShop} />
      <Route path="/traits" component={Traits} />
      <Route path="/relics" component={Relics} />
      <Route path="/chargen" component={Chargen} />
      <Route path="/rules" component={Rules} />
      <Redirect from="/items" to="/items/weapons" />
    </Switch>
  )
};