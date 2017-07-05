import React , { Component }from 'react';
import {Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createMedia } from '../actions';


class MediaNew extends Component {


    renderField(field){
        const { label, meta : {touched, error} } = field;
        const errorControl = `form-group ${ touched && error ? 'has-danger' : ""}`

        // label;
        // meta.touched;
        // meta.error;
        return(
            <div className={errorControl}>
                <label htmlFor="title">{label}</label>
                <input
                    className="form-control"
                    {...field.input}
                    type="text"
                />
                { touched && error &&
                <span className="text-help">{error}</span>}
            </div>
        );
    }

    onSubmit(values){
        this.props.createMedia(values,() => {
            this.props.history.push('/');
        });
    }

    render(){

        const { handleSubmit } = this.props;
        //

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                {/*handleSubmit */}
                <Field label="Title" name="title" component={this.renderField}>
                </Field>
                <Field label="Categories" name="categories" component={this.renderField}>
                </Field>
                <Field label="Content" name="content" component={this.renderField}>
                </Field>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

const validate = values => {
    const errors = {};
    if(!values.title){
        errors.title = "please enter a title that is longer than 3 characters"
    }
    if(!values.categories){
        errors.categories = "please enter a category"
    }
    if(!values.content){
        errors.content = "please enter some words"
    }
    return errors
}

// export default reduxForm({
//     validate : validate,
//     form: 'MediaNewForm'
// })(
//     connect(null,{ createMedia })(MediaNew)
// );

MediaNew = reduxForm({validate: validate,
    form: 'MediaNewForm'})(MediaNew);

MediaNew = connect(null,{ createMedia })(MediaNew);

export default MediaNew;
//reduxForm provides tons of additional properties for the MediaNew class to use

