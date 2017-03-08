import constants from '../constants';
import isFormatAllowed from '../services/isFormatAllowed';
import isPhraseAvailable from '../services/isPhraseAvailable';
import store from '../reducers';
import validations from '../validations';
import { delay } from 'redux-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { validationChanged, togglePhraseCollisionLoading } from '../actions';

function* checkForFormatCollisions(action) {
	const isAllowed = isFormatAllowed(action.payload.platePhrase);
	yield put(validationChanged(validations.FORMAT_COLLISION, isAllowed));
}

function* checkForPhraseAvailability(action) {
	yield call(delay, 750);

	if (!store.getState().getIn(['plate', 'hasError'])) {
		put(togglePhraseCollisionLoading(true));
		const isAvailable = yield call(isPhraseAvailable, action.payload.platePhrase);
		put(togglePhraseCollisionLoading(false));
		yield put(validationChanged(validations.PHRASE_COLLISION, isAvailable));
	}
}

export default function* onPlatePhraseChanged() {
	yield takeEvery(constants.PHRASE_CHANGED, checkForFormatCollisions);
	yield takeLatest(constants.PHRASE_CHANGED, checkForPhraseAvailability)
}