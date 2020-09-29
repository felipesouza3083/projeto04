export const validate = values => {

    const errors = {};

    if(!values.dataMin){
        errors.dataMin = "Por favor, informe a data de inicio do período.";
    }

    if(!values.dataMax){
        errors.dataMax = "Por favor, informe a data de termino do período.";
    }

    return errors;
}