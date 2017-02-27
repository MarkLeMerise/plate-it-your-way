import App from './components/App';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './reducers';

render((
	<Provider store={ store }>
		<App />
	</Provider>
), document.getElementById('root'));