import React, {Component} from 'react';

import Component1 from './functional/component1';
import Component2 from './functional/component2';
import Component3 from './functional/component3';

import Container1 from './containers/container1';

import { Router, Route, Switch } from 'react-router';
import Header from './containers/header';
import history from './utils/history';

class Routes extends Component {
    render() {
        return (
            <div>
                <div>
                    <Router history={history}>
                        <div>
                            <Header />
                            <Switch>
                                <Route path="/container1" component={Container1} />
                                <Route path="/component1" render={(props) => <Component1 {...props}/>} />
                                <Route path="/component2" component={Component2} />
                                <Route path="/component3" component={Component3} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}

export default Routes;