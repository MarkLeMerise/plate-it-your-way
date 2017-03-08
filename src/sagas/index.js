import plateSaga from './plateSaga';

export default function* rootSaga() {
	yield [
		plateSaga()
	];
};