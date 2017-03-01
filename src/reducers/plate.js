import constants from '../constants';

export default (state, action) => {
	if (action.type === constants.CHANGE_PLATE_PHRASE) {
		return state.set('phrase', action.payload.platePhrase);
	}

	if (action.type === constants.SET_VALIDATION_ERRORS) {
		return state.set('error', action.payload.error);
	}

	return state;
};