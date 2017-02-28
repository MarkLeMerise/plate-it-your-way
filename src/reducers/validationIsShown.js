import constants from '../constants';

export default (state, action) => {
	if (action.type === constants.TOGGLE_VALIDATION_MESSAGE) {
		return !state;
	}

	return state;
};