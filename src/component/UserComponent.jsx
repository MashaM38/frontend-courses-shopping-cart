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
            email: ''
        }        
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        console.log(this.state.id)
        
        //TODO:
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

    onSubmit(values) {
        console.log(values);
    }

    render() {
        let { id, name, surname, email } = this.state

        return (
            <div>
                <h3>User Details</h3>
                <Formik
                    initialValues={{ id, name, surname, email }}
                    onSubmit={this.onSubmit}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>Id</label>
                                    <Field className="form-control" type="text" name="id" disabled />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Name</label>
                                    <Field className="form-control" type="text" name="name" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Surname</label>
                                    <Field className="form-control" type="text" name="surname" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>E-mail</label>
                                    <Field className="form-control" type="text" name="email" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>            
      )
  }

}

export default UserComponent