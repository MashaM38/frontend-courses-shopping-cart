import React, { Component } from 'react';
import UserDataService from '../service/UserDataService';

const USER_ID = 1;

class ListUsersComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.refreshUsers = this.refreshUsers.bind(this)
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        UserDataService.retrieveAllUsers()
            .then(
                response => {
                    console.log(response);
                    this.setState({ users: response.data })
                }
            )
    }

    deleteCourseClicked(id) {
        UserDataService.deleteUser(id)
            .then(
                response => {
                    this.setState({ message: `Delete of user ${id} is Successful` })
                    this.refreshUsers();
                }
            )
    
    }

    render() {
        return (
            <div className="container">
                <h3>All Users Data</h3> 
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}               
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>E-mail</th>                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.surname}</td>
                                            <td>{user.email}</td> 
                                            <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(user.id)}>Delete</button></td>                                           
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

export default ListUsersComponent