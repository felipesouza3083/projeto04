import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { textField } from '../../forms/textField';
import { validate } from './FormRegisterValidate';

let FormRegister = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="nome"
                component={textField}
                label="Nome de Acesso"
                type="text"
                placeholder="Informe o seu nome"
            />
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
            <Field
                name="senhaConfirmacao"
                component={textField}
                label="Confirme sua Senha"
                type="password"
                placeholder="Confirme a sua senha"
            />
            <input type="submit" value="Realizar Cadastro"
                className="btn btn-primary btn-user btn-block" />
        </form>
    )
}

const afterSubmit = (result,dispatch) => {
    dispatch(reset('FormRegister'))
}

FormRegister = reduxForm({
    form: 'FormRegister',
    validate,
    onSubmitSuccess: afterSubmit
})(FormRegister);

export default FormRegister;