import constants from '../constants';

export default (state, action) => {
	if (action.type === constants.SELECT_DESIGN) {
		const { design } = action.payload;
		return state.set('selected', state.get('list').find(d => d.code === design))
	}

	return state;
};