import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
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
        this.props.history.push(`/users`)
    }

    render() {
        return (
            <div className="container">
                <h3>All Users Data</h3> 
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}               
                <div className="container">
                    <div className="float-right">
                        <Button color="info" onClick={this.addUserClicked}>Add User</Button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Surname</th>
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
                                            <td>{user.name}</td>
                                            <td>{user.surname}</td>
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