export const validate = values => {

    const errors = {};

    if(!values.nomeCompromisso){
        errors.nomeCompromisso = "Por favor, preencha o nome do compromisso.";
    }

    if(!values.descricao){
        errors.descricao = "Por favor, preencha a descrição.";
    }

    if(!values.dataCompromisso){
        errors.dataCompromisso = "Por favor, preencha a data do compromisso.";
    }

    if(!values.horaCompromisso){
        errors.horaCompromisso = "Por favor, preencha a hora do compromisso.";
    }

    return errors;
}