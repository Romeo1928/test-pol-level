import {initialState, initialStateType} from "../AppWithRedux";


type SetAnswerACType = ReturnType<typeof setAnswerAC>



export const questionsReducer = (state: initialStateType = initialState, action: SetAnswerACType): initialStateType => {
	switch (action.type) {
		case 'SET_ANSWER':
			return {
				...state,
				answers: [
					...state.answers.slice(0, action.payload.questionId - 1),
					action.payload.selectedOption,
					...state.answers.slice(action.payload.questionId),
				],
			}

			// const {questionId, selectedOption} = action.payload;
			// const updatedAnswers = [...state.answers];
			// updatedAnswers[questionId - 1] = selectedOption;
			// return {...state, answers: updatedAnswers};
		default:
			return state;
	}
};


export const setAnswerAC = (questionId: number, selectedOption: string) => {
	return {
		type: 'SET_ANSWER',
		payload: {questionId, selectedOption},
	} as const
};