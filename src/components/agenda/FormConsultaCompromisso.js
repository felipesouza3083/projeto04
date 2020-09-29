import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { textField } from '../../forms/textField';
import { validate } from './FormConsultaCompromissoValidate';

let FormConsultaCompromisso = props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="dataMin"
                component={textField}
                label="Data de Inicio:"
                type="date" />

            <Field
                name="dataMax"
                component={textField}
                label="Data de Término:"
                type="date" />

            <input type="submit"
                value="Pesquisar Compromissos"
                className="btn btn-primary btn-user btn-block" />
        </form>
    )
}

FormConsultaCompromisso = reduxForm({
    form: 'FormConsultaCompromisso',
    validate
})(FormConsultaCompromisso);

export default FormConsultaCompromisso;