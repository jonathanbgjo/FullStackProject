import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

// import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavContainer from './nav/nav_container'
import ProfileContainer from './profile/profile_container'
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

const App = () => {
    return (
    <div>
        <Route path="/user/:userId" component={ProfileContainer} /> 
        <Route exact path="/" component={NavContainer} />
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
            <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
            {/* <Route exact path="/" component={SearchContainer} /> */}
            {/* <Redirect from='*' to='/' /> */}
            {/* <Redirect to="/"> </Redirect> */}
        </Switch>
    </div>
    )
};

export default App;
