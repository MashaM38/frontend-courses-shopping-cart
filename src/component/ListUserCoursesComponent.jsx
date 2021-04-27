import React, { Component } from 'react';
import UserCoursesDataService from '../service/UserCoursesDataService';

class ListUserCoursesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: [],            
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
    }

    componentDidMount() {
        this.refreshCourses(this.props.match.params.id);        
    }

    refreshCourses(id) {
        UserCoursesDataService.retrieveAllCourses(id)
            .then(
                response => {
                    console.log(response);
                    this.setState({ courses: response.data })
                }
            )
    }
 
    deleteCourseClicked(userId, courseId) {
        console.log('Delete course id = ' + courseId)
        UserCoursesDataService.deleteCourse(userId, courseId)
        .then(
            response => {
                this.setState({ message: `Delete of courseId ${courseId} is Successful` })
                this.refreshCourses(userId)
            }
        )  
    }

    render() {
        return (
            <div className="container">
                <h3>All User Courses</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
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
                                            <td><button className="btn btn-warning" 
                                                    onClick={() => this.deleteCourseClicked(this.props.match.params.id, course.id)}>Delete</button></td>                                           
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