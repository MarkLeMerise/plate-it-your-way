import constants from '../constants';
import plateDatabase from '../data/plateDatabase.json';
import randomInt from 'random-int';

export function changePlatePhrase(platePhrase) {
	return {
		type: constants.PHRASE_CHANGED,
		payload: { platePhrase }
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

export function validationChanged(validationType, isOkay) {
	return {
		type: constants.PHRASE_VALIDATION_CHANGED,
		payload: { isOkay, validationType }
	};
};

export function togglePhraseCollisionLoading(isLoading) {
	return {
		type: constants.PHRASE_COLLISION_LOADING,
		payload: { isLoading }
	}
}