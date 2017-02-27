import constants from '../constants';

export default (design) => ({
	type: constants.SELECT_DESIGN,
	payload: { design }
});