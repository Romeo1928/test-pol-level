// import {initialShowTextStateType} from "../AppWithReducers";

import {initialShowTextState, initialShowTextStateType} from "../AppWithRedux";

type ActionType = ToggleShowResultACType | ToggleShowTextACType

type ToggleShowResultACType = ReturnType<typeof toggleShowResultAC>
type ToggleShowTextACType = ReturnType<typeof toggleShowTextAC>



export const showTextReducer = (state: initialShowTextStateType = initialShowTextState, action: ActionType): initialShowTextStateType => {
	switch (action.type) {
		case 'TOGGLE_SHOW_RESULT':
			return {
				...state,
				showResult: !state.showResult,
			};
		case 'TOGGLE_SHOW_TEXT':
			return {
				...state,
				showText: !state.showText,
			};
		default:
			return state;
	}
};


export const toggleShowResultAC = () => {
	return {
		type: 'TOGGLE_SHOW_RESULT',
	} as const
};

export const toggleShowTextAC = () => {
	return {
		type: 'TOGGLE_SHOW_TEXT',
	} as const
};