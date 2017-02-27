import constants from '../constants';

export default (plateNumber) => ({
	type: constants.CHANGE_PLATE_NUMBER,
	payload: { plateNumber }
});