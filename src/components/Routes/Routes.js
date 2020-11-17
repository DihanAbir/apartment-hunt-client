import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Deshboard from "../Deshboard/Deshboard";
import NotFound from "../NotFound/NotFound";
import Login from "../pages/Auth/Login/Login";

import BookingDetails from "../pages/Booking/BookingDetails/BookingDetails";

import Home from "../pages/Home/Home";

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/booking/:rentID" component={BookingDetails} />
                    <Route exact path="/" component={Home} />;
                    <Route path="/deshboard" component={Deshboard} />
                    
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
};

export default Routes;
