import constants from '../constants';

export function changePlatePhrase(platePhrase) {
	return {
		type: constants.CHANGE_PLATE_PHRASE,
		payload: { platePhrase }
	};
};

export function toggleValidationMessage() {
	return {
		type: constants.TOGGLE_VALIDATION_MESSAGE
	};
};

export function selectCause(cause) {
	return {
		type: constants.SELECT_CAUSE,
		payload: { cause }
	};
};

export function selectDesign(design) {
	return {
		type: constants.SELECT_DESIGN,
		payload: { design }
	};
};