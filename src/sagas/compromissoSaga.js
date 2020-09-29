import * as services from '../services/compromissoServices';
import * as actions from '../actions/compromissoActions';

import { all, put, takeEvery, call } from 'redux-saga/effects';

function* consultarCompromissos(action) {
    try {
        var dataMin = action.data.dataMin;
        var dataMax = action.data.dataMax;

        const result = yield call(services.getByDatas, dataMin, dataMax);

        yield put({ type: actions.SUCESSO_CONSULTA_COMPROMISSOS, data: result })
    } catch (e) {
        yield put({ type: actions.ERRO_CONSULTA_COMPROMISSOS, data: e });
    }
}

function* watcher() {
    yield takeEvery(actions.CONSULTAR_COMPROMISSOS, consultarCompromissos);
}

export default function* compromissoSaga() {
    yield all([watcher()]);
}