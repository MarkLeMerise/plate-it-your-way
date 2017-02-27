import constants from '../constants';

export default (cause) => ({
	type: constants.SELECT_CAUSE,
	payload: { cause }
});