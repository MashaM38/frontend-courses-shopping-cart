import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserDataService from '../service/UserDataService';

class UserComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            surname: '',
            email: '',
        }
    }

    componentDidMount() {
        console.log(this.state.id)
        
        if (this.state.id == -1) {
            return
        }

        UserDataService.retrieveUser(this.state.id)
            .then(response => this.setState({
                name: response.data.name,
                surname: response.data.surname,
                email: response.data.email
            }))
    }

    render() {
        let { id, name, surname, email } = this.state

        return (
            <div>
                <h3>User Details</h3>
                <div>{id}</div>
                <div>{name}</div>
                <div>{surname}</div>
                <div>{email}</div>
            </div>            
      )
  }
  
}

export default UserComponent