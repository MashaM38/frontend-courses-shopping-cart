import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserDataService from '../service/UserDataService';

class ListUsersComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.refreshUsers = this.refreshUsers.bind(this)
        this.deleteUserClicked = this.deleteUserClicked.bind(this)
        this.updateUserClicked = this.updateUserClicked.bind(this)
        this.addUserClicked = this.addUserClicked.bind(this)
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

    deleteUserClicked(id) {
        UserDataService.deleteUser(id)
            .then(
                response => {
                    this.setState({ message: `Delete of user ${id} is Successful` })
                    this.refreshUsers();
                }
            )    
    }

    updateUserClicked(id) {
        console.log('update user id = ' + id)
        this.props.history.push(`/users/${id}`)
    }

    addUserClicked() {
        console.log('Add user')
        this.props.history.push(`/users`)
    }

    getUserCoursesClicked(id) {
        console.log('Get courses for user id = ' + id)
        this.props.history.push(`/users/${id}/courses`)        
    }

    render() {
        return (
            <div className="container">
                <h3>All Users Data</h3> 
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}               
                <div className="container">
                    <div className="float-right">
                        <Button color="info" tag={Link} to="/users/new" onClick={this.addUserClicked}>Add User</Button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name Surname</th>
                                <th>E-mail</th>                                
                                <th>Update</th>
                                <th>Delete</th>                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td><Button color="link" onClick={() => this.getUserCoursesClicked(user.id)}>{user.name} {user.surname}</Button></td>
                                            <td>{user.email}</td>                                            
                                            <td><button className="btn btn-success" onClick={() => this.updateUserClicked(user.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteUserClicked(user.id)}>Delete</button></td>                                            
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