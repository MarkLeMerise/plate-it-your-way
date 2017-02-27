import constants from '../constants';

export default (state, action) => {
	if (action.type === constants.CHANGE_PLATE_NUMBER) {
		return action.payload.plateNumber;
	}

	return state;
};