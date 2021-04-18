import React, { Component } from 'react';
import UserCoursesDataService from '../service/UserCoursesDataService';

const USER_ID = 1;

class ListUserCoursesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.refreshUsers = this.refreshUsers.bind(this)
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        UserCoursesDataService.retrieveAllUserCourses(USER_ID)//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ courses: response.data })
                }
            )
    }

    //TODO:
    deleteCourseClicked(USER_ID, courseId) {
        UserCoursesDataService.deleteCourse(USER_ID, courseId)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${courseId} is Successful` })
                    this.refreshCourses()
                }
            )    
    }

    render() {
        return (
            <div className="container">
                <h3>All User Courses</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>                                                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.name}</td>                                            
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListUserCoursesComponent