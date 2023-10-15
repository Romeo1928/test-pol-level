import React from 'react';
import b from './SuperButton.module.css'

type SuperButtonPropsType = {
	className: string,
	name: string,
	callBack: () => void
}

export const SuperButton = (props: SuperButtonPropsType) => {

	const onClickHandler = () => {props.callBack()}

	return (
		<button className={`${b.button} ${props.className}`} onClick={onClickHandler}>{props.name}</button>
	);
};

