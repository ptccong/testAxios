import { ON_ADD_DATA, ON_FECTH, FECTH_FAIL, FECTH_SUCCES } from '../Action/actionsType';
import { takeEvery, put } from 'redux-saga/effects';
import { Api } from './Api'

function* CallAPI() {
    try {
        const data = yield Api.getUserFromApi();
        yield put({ type: FECTH_SUCCES, data: data });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error });

    }

}
export function* connectActions() {
    yield takeEvery(ON_FECTH, CallAPI)
}
function* NocallAPI(action) {
    fetch('https://5e032d0763d08b0014a28d2b.mockapi.io/test7/user', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: action.value.name,
            password: action.value.old
        })
    });
    console.log(action.value)
}
export function* NoconnectActions() {
    yield takeEvery(ON_ADD_DATA, NocallAPI)
}