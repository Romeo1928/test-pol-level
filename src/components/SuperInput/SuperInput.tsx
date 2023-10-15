import React, {ChangeEvent} from 'react';

type SuperInputPropsType = {
	isSelected: boolean,
	callBack: (newValue: boolean) => void
}

export const SuperInput = (props: SuperInputPropsType) => {
	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		let newValue = event.currentTarget.checked
		props.callBack(newValue)
	}

	return (
		<input
			type="checkbox"
			checked={props.isSelected}
			onChange={onChangeInputHandler}
			// onChange={() => handleChange(el)}
			// disabled={props.showResults}
		/>
	)
};