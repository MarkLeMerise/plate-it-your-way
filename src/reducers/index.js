import Immutable from 'immutable';
import PlateDesign from '../models/PlateDesign';
import availableDesigns from '../data/designs.json';
import causes from './causes';
import constants from '../constants';
import designs from './designs';
import plate from './plate';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const initialState = Immutable.fromJS({
	causes: {
		list: [],
		selected: null
	},
	designs: {
		list: availableDesigns.map(d => new PlateDesign(d)),
		selected: null
	},
	plate: {
		hasError: false,
		phrase: ''
	}
});

const rootReducer = combineReducers({
	causes,
	designs,
	plate
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)
store.subscribe(() => console.log(store.getState().toJSON()));

export default store;