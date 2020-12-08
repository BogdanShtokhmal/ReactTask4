import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <div>
                    <Link to={'/users'}>Users</Link>
                </div>
                <div>
                    <Link to={'/posts'}>Posts</Link>
                </div>
                <div>
                    <Link to={'/comments'}>Comments</Link>
                </div>
                <div className={'app-route'}>
                <Switch>
                    <Route path={'/users'} render={()=>{return <AllUsers/>}}/>

                    <Route path={'/posts'}>
                        <AllPosts/>
                    </Route>
                    <Route path={'/comments'}>
                        <AllComments/>;
                    </Route>


                </Switch>
                </div>
            </div>
        </Router>

    );
  }
}

export default App;
