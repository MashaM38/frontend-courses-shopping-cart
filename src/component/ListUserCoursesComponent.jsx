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
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        UserCoursesDataService.retrieveAllUsers(USER_ID)//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ courses: response.data })
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3>All User Courses</h3>
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