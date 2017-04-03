import { IRootState } from '../interfaces/IRootState';
import { combineReducers } from 'redux';
import appReducers from '../reducers/app.reducer';

const rootReducer = combineReducers<IRootState>({
	app: appReducers
});

export default rootReducer;