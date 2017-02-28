import Immutable from 'immutable';
import PlateDesign from '../models/PlateDesign';
import availableDesigns from '../data/designs.json';
import causes from './causes';
import constants from '../constants';
import designs from './designs';
import platePhrase from './platePhrase';
import validationIsShown from './validationIsShown';
import { combineReducers } from 'redux-immutable';
import { createStore } from 'redux';

const initialState = Immutable.fromJS({
	causes: {
		list: [],
		selected: null
	},
	designs: {
		list: availableDesigns.map(d => new PlateDesign(d)),
		selected: null
	},
	platePhrase: '',
	validationIsShown: false
});

const rootReducer = combineReducers({
	causes,
	designs,
	platePhrase,
	validationIsShown
});

const store = createStore(rootReducer, initialState);

store.subscribe(() => console.log(store.getState().toJSON()));

export default store;