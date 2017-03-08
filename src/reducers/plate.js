import constants from '../constants';
import validations from '../validations';

export default (state, action) => {
	if (action.type === constants.PHRASE_CHANGED) {
		return state.set('phrase', action.payload.platePhrase);
	}

	if (action.type === constants.SELECT_CAUSE) {
		return state.merge({
			hasError: false,
			phrase: ''
		});
	}

	if (action.type === constants.PHRASE_VALIDATION_CHANGED) {
		const { isOkay } = action.payload;
		return state.set('hasError', !isOkay);
	}

	return state;
};