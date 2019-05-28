import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import thunk from 'redux-thunk'
import { Modalz } from './Modalz';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import Demo from './stories.demo'

import storyReducers from './stories.reducers'
const store = applyMiddleware(thunk)(createStore)(storyReducers)

storiesOf('Button')
	.add('Modal', (props) => {
		console.log(props)
		return (
			<Provider store={store}>
				<Demo />
				<Modalz />
			</Provider>
		)
	});