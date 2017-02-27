import Immutable from 'immutable';
import PlateDesign from '../models/PlateDesign';
import availableDesigns from '../data/designs.json';
import causes from './causes';
import constants from '../constants';
import designs from './designs';
import plateNumber from './plateNumber';
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
	plateNumber: ''
});

const rootReducer = combineReducers({
	causes,
	designs,
	plateNumber
});

const store = createStore(rootReducer, initialState);

store.subscribe(() => console.log(store.getState().toJSON()));

export default store;