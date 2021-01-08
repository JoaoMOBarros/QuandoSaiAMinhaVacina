import React from "react";
import { Route, BrowserRouter, Switch} from "react-router-dom";

import LandingPage from '../pages/Landing'
import Form from '../pages/Form'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage}></Route>
                <Route exact path="/formulario" component={Form}></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;