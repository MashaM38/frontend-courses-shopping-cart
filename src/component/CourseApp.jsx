import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListUsersComponent from './ListUsersComponent';
import HomeComponent from './HomeComponent';

class CourseApp extends Component {
    render() {
        return (
            <>              
              <Router>
                <>
                <h1>User Courses Application</h1>
                    <Switch>
                        <Route path="/"  exact={true} component={HomeComponent} />
                        <Route path="/users" exact component={ListUsersComponent} />                        
                    </Switch>
                </>
            </Router>
            </>  
        )
    }
}

export default CourseApp