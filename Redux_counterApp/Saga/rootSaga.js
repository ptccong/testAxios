import { all } from 'redux-saga/effects';
import { connectActions, NoconnectActions } from './counterSaga';
export default function* rootSaga() {
    yield all([
        connectActions(),
        NoconnectActions()
    ])
}