import 'react-hot-loader/patch';
import App from './components/App';
import React from 'react';
import store from './reducers';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

const load = () => render((
	<AppContainer>
		<Provider store={ store }>
			<App />
		</Provider>
	</AppContainer>
), document.getElementById('root'));

if (module.hot) {
	module.hot.accept('./components/App', load);
}

load();