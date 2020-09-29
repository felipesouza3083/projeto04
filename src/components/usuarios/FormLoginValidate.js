export const validate = values =>{
    const errors = {};
    if(!values.email){
        errors.email = "Por favor, preencha o email.";
    }

    if(!values.senha){
        errors.senha = "Por favor, preencha a senha";
    }

    return errors;
}