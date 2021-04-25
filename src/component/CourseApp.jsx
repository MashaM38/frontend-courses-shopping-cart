import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListUsersComponent from './ListUsersComponent';
import HomeComponent from './HomeComponent';
import UserComponent from './UserComponent';
import AddUserComponent from './AddUserComponent';
import ListUserCoursesComponent from './ListUserCoursesComponent';

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
                        <Route path="/users/new" exact component={AddUserComponent} />
                        <Route path="/users/:id/courses" component={ListUserCoursesComponent} />
                        <Route path="/users/:id" component={UserComponent} />                                                
                    </Switch>
                </>
            </Router>
            </>  
        )
    }
}

export default CourseApp