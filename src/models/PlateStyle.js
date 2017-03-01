import Immutable from 'immutable';

export default class PlateStyle extends Immutable.Record({
	backgroundColor: null,
	backgroundImage: null,
	footerImage: null,
	footerText: null,
	headerImage: null,
	logoImage: null,
	logoText: null
}) {}