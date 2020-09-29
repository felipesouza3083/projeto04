import * as actions from '../actions/compromissoActions';

const initialState = {
    listagemDeCompromissos: []
};

const compromissoReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case actions.SUCESSO_CONSULTA_COMPROMISSOS:
            return {
                ...state,
                listagemDeCompromissos: action.data
            };
        case actions.ERRO_CONSULTA_COMPROMISSOS:
            console.log(action.data);
            return state;
        default:
            return state;
    }
}

export default compromissoReducer;