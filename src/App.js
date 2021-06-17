import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import TeamInfo from './components/Team/TeamInfo';
import ClassicLeague from './components/League/ClassicLeague';
import TeamId from './components/Team/TeamId';
import NotFound from './components/NotFound';
import LeagueId from './components/League/LeagueId';

const App = () => {
    return (
        <div className='container'>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/team'>
                        <TeamId />
                    </Route>
                    <Route exact path='/team/:teamUrlId'>
                        <TeamInfo />
                    </Route>
                    <Route exact path='/league'>
                        <LeagueId />
                    </Route>
                    <Route exact path='/league/:leagueUrlId'>
                        <ClassicLeague />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
