import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { textField } from '../../forms/textField';
import { validate } from './FormLoginValidate';

let FormLogin = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="email"
                component={textField}
                label="Email de Acesso"
                type="email"
                placeholder="Informe o seu Email"
            />
            <Field
                name="senha"
                component={textField}
                label="Senha de Acesso"
                type="password"
                placeholder="Informe a sua senha"
            />
            <input type="submit" value="Acessar Sistema"
                className="btn btn-primary btn-user btn-block" />
        </form>
    )
}

const afterSubmit = (result, dispatch) => {
    dispatch(reset('FormLogin'))
}
FormLogin = reduxForm({
    form: 'FormLogin',
    validate,
    onSubmitSuccess: afterSubmit
})(FormLogin);

export default FormLogin;