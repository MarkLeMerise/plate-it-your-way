import plateDatabase from '../data/plateDatabase.json';
import randomInt from 'random-int';

export default (phrase) => {
	return new Promise(resolve => {
		setTimeout(() => resolve(!plateDatabase.includes(phrase)), randomInt(1, 4) * 1000);
	});
};