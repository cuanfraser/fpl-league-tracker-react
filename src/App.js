import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team/Team';
import ClassicLeague from './components/League/ClassicLeague';

const App = () => {
    return (
        <div className='container'>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/team'>
                        <Team />
                    </Route>
                    <Route
                        path='/league/:leagueId'
                        exact={true}
                        render={(props) => (
                            <ClassicLeague
                                {...props}
                                history={props.history}
                                leagueId={props.match.params.leagueId}
                            />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
