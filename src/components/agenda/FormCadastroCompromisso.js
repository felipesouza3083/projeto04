import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { textField } from '../../forms/textField';
import { textAreaField } from '../../forms/textAreaField';
import { validate } from './FormCadastroCompromissoValidate.js';

let FormCadastroCompromisso = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="nomeCompromisso"
                component={textField}
                label="Nome do Compromisso"
                type="text"
                placeholder="Informe o nome do compromisso"
            />
            <Field
                name="dataCompromisso"
                component={textField}
                label="Data do Compromisso"
                type="date"
            />
            <Field
                name="horaCompromisso"
                component={textField}
                label="Hora do Compromisso"
                placeholder="00:00"
                type="text"
            />
            <Field
                name="descricao"
                component={textAreaField}
                label="Descrição do compromisso"
            />
            <input type="submit" value="Cadastrar Compromisso"
                className="btn btn-primary btn-user btn-block" />
        </form>
    )
}

const afterSubmit = (result, dispatch) => {
    dispatch(reset('FormCadastroCompromisso'));
}

FormCadastroCompromisso = reduxForm({
    form: 'FormCadastroCompromisso',
    validate,
    onSubmitSuccess: afterSubmit
})(FormCadastroCompromisso);

export default FormCadastroCompromisso;