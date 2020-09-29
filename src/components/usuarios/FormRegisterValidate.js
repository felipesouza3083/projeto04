export const validate = values => {
    const errors = {};
    if (!values.nome) {
        errors.nome = "Por favor, preencha o nome.";
    }

    if (!values.email) {
        errors.email = "Por favor, preencha o email.";
    }

    if (!values.senha) {
        errors.senha = "Por favor, preencha a senha";
    }

    if (!values.senhaConfirmacao) {
        errors.senhaConfirmacao = "Por favor, confirme a senha";
    }

    if (values.senha !== values.senhaConfirmacao) {
        errors.senhaConfirmacao = "Senhas não conferem";
    }

    return errors;
}