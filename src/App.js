import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// imports 
import Index_Page from "./views/Index_Page";
import CreateContainer from "./views/CreateContainer";
import ViewContainer from "./views/ViewContainer";
import Book_container from "./views/Book_container";
import AppointmentsContainer from "./views/AppointmentsContainer";
import Reviews from "./views/Reviews";

import store from "./store";
var hist = createBrowserHistory();

function App() {

    return (
      <Provider store={store}>
        <Router history={hist}>
          <Fragment>
            <Switch>
              <Route exact path="/create_case" component={CreateContainer} />
              <Route exact path="/view_case" component={ViewContainer} />
              <Route exact path="/book" component={Book_container} />
              <Route exact path="/appointments" component={AppointmentsContainer} />
              <Route exact path="/reviews" component={Reviews} />
              <Route exact path="/" component={ Index_Page} /> 
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
}


export default App;