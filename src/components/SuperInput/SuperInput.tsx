import React, {ChangeEvent} from 'react';
import s from './SuperInput.module.css'

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
			className={s.input}
			type="checkbox"
			checked={props.isSelected}
			onChange={onChangeInputHandler}
			// onChange={() => handleChange(el)}
			// disabled={props.showResults}
		/>
	)
};