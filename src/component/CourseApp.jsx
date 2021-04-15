import React, { Component } from 'react';
import ListUserCoursesComponent from './ListUserCoursesComponent';

class CourseApp extends Component {
    render() {
        return (
            <>
              <h1>Courses Application</h1>
              <ListUserCoursesComponent/>
            </>  
        )
    }
}

export default CourseApp