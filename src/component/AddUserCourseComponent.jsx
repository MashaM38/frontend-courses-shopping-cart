import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserCoursesDataService from '../service/UserCoursesDataService';

class AddUserCourseComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.match.params.id,
            courseId: '', 
            errorMessage: null,
            processing: false
        }        
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {        
    }

    showProcessing = () => {
        this.setState({ processing: true });
    }
    
    hideProcessing = () => {
        setTimeout(this.setState({ processing: false }), 2000);
    }

    onSubmit(values) {        
        let course = {
            userId: this.props.match.params.id,
            courseId: values.courseId,
            targetDate: values.targetDate
        }

        UserCoursesDataService.addCourseForUser(this.props.match.params.id, course)
                .then(() => this.props.history.push(`/users/${this.props.match.params.id}/courses`))
                .catch(err => { 
                    this.setState({errorMessage: err.message});
                  })     
        console.log(values);
    }

    validate(values) {
        let errors = {}
        if (!values.courseId) {
            errors.courseId = 'Enter Course Id'
        }
        return errors
    }


    render() {
        let { courseId } = this.state

        return (
            <div>
                <h3>Course Details</h3>
                { this.state.errorMessage && <h1>Error: {this.state.errorMessage}</h1> }
                <Formik
                    initialValues={{ courseId }}
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
                                    <label>CourseId</label>
                                    <Field className="form-control" type="text" name="courseId"/>
                                </fieldset>                                
                                <button className="btn btn-success" onClick={this.showProcessing} type="submit">
                                {!this.state.processing ? "Save" : "Saving.."}
                                    {this.state.processing ? (
                                            <Spinner
                                                style={{ width: "0.7rem", height: "0.7rem" }}
                                                type="grow"
                                                color="light"
                                                />
                                    ):null}
                                </button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        )    
    }    
}

export default AddUserCourseComponent