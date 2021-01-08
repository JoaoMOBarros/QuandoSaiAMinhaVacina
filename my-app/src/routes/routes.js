import React from "react";
import { Route, BrowserRouter, Switch} from "react-router-dom";

import LandingPage from '../pages/Landing'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage}></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;