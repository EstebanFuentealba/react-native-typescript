import { IRootState } from '../interfaces/IRootState';
import { IApp } from '../interfaces/IApp';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root.reducer';
import { composeWithDevTools } from 'remote-redux-devtools';
import { Platform } from "react-native";

export default function configureStore(initialState:IRootState) {

	return createStore<IRootState>(
        rootReducer, 
        initialState, 
        composeWithDevTools(
            applyMiddleware(thunk, logger)
        )
    );
}