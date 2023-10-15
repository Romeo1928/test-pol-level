import {combineReducers, legacy_createStore} from 'redux';
import {questionsReducer} from "./questions-reducer";
import {showTextReducer} from "./showText-reducer";


const rootReducer = combineReducers({
	questions: questionsReducer,
	showText: showTextReducer,
});

const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

export default store;