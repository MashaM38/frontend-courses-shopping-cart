import React, { Component } from 'react';
import ListUsersComponent from './ListUsersComponent';

class CourseApp extends Component {
    render() {
        return (
            <>
              <h1>Courses Application</h1>
              <ListUsersComponent/>
            </>  
        )
    }
}

export default CourseApp