import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanageMap from './pages/OrphanageMap';


function Routes(){
    return (
        <BrowserRouter>
            <Route path="/"  component={Landing}  exact/>
            <Route path="/app"  component={OrphanageMap}  exact/>
        </BrowserRouter>
    );

}

export default Routes;