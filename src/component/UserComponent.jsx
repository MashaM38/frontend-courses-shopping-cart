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
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        console.log(this.state.id)
        
        UserDataService.retrieveUser(this.state.id)
            .then(response => this.setState({
                name: response.data.name,
                surname: response.data.surname,
                email: response.data.email
            }))
    }

    onSubmit(values) {        
        let user = {
            id: this.state.id,
            name: values.name,
            surname: values.surname,
            email: values.email,
            targetDate: values.targetDate
        }

        UserDataService.updateUser(user)
                .then(() => this.props.history.push('/users'))

        console.log(values);
    }

    validate(values) {
        let errors = {}

        if (!values.name) {
            errors.name = 'Enter User name'
        } else if (values.name.length < 2) {
            errors.name = 'Enter at least 2 Characters in Name field'
        }

        if (!values.surname) {
            errors.name = 'Enter User surname'
        } else if (values.surname.length < 4) {
            errors.surname = 'Enter at least 4 Characters in Surname field'
        }

        if (!values.email) {
            errors.email = 'Enter User e-mail'
        } else if (!values.email.includes('@')) {
            errors.surname = 'Invalid e-mail!'
        }
    
        return errors
    }

    render() {
        let { id, name, surname, email } = this.state

        return (
            <div>
                <h3>User Details</h3>
                <Formik
                    initialValues={{ id, name, surname, email }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="name" component="div"
                                        className="alert alert-warning" />
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