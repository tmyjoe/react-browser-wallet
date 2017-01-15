import React, { Component } from 'react'; // {Reactまで囲むと動かないので調べる}
import { Field, reduxForm } from 'redux-form';

class Sendform extends Component {

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field name="address" component="input" type="text"/>
                    <Field name="amount" component="input" type="number"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}


Sendform = reduxForm({
    form: 'sendform' // a unique name for this form
})(Sendform);

export default Sendform;