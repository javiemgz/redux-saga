import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Results from './pages/results'
import Home from './pages/Home';
import MovieDetail from './pages/movieDetail'

const App = ({ store }) => (
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/results" component={Results} />
				<Route path="/movie/:movieId" component={MovieDetail} />
			</div>
		</Router>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
