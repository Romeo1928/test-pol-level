import React from "react";
import '../../App.css';
import {QuestionType} from "../../App";
import s from './Question.module.css'
import {SuperInput} from "../SuperInput/SuperInput";

type QuestionPropsType = {
	question: QuestionType;
	selectedOption: string;
	onAnswerChange: (questionId: number, selectedOption: string) => void;
	showResults: boolean;
};

export const Question = (props: QuestionPropsType) => {

	// const isCorrect = props.selectedOption === props.question.correctAnswer;
	// const isSelected = props.selectedOption !== '';

	const handleChange = (selectedOption: string) => {
		props.onAnswerChange(props.question.id, selectedOption);
	};
	// Разберем эту функцию по шагам:
	// 1. (selectedOption: string): Это объявление параметра функции. Функция принимает один параметр selectedOption, который представляет выбранный ответ.
	// 2. props.onAnswerChange(props.question.id, selectedOption);: Здесь вызывается функция onAnswerChange, которая является пропсом, переданным в компонент, содержащий эту функцию handleChange. В данном случае, onAnswerChange ожидает два аргумента: props.question.id и selectedOption.
	// - props.question.id: Это идентификатор вопроса, переданный в компонент через пропсы.
	// - selectedOption: Это выбранный ответ, полученный как параметр функции handleChange.
	//  Таким образом, при вызове функции handleChange, она передает идентификатор вопроса и выбранный ответ в функцию onAnswerChange, которая обрабатывает эти значения. Как именно эти значения обрабатываются, зависит от реализации onAnswerChange в родительском компоненте.
	//  Обычно, onAnswerChange используется для обновления значения состояния родительского компонента, чтобы отслеживать выбранные ответы на вопросы или выполнять другие операции, связанные с выбранными ответами.

	return (
		<div className={s.question}>
			<h3>
				{props.question.id}. {props.question.question}
			</h3>
			<ul className={s.optionsList}>
				{props.question.options.map((el, index) => {

				const isCorrectAnswer = props.question.correctAnswer === el;
				const isSelected = props.selectedOption === el;
				const isIncorrectAnswer = isSelected && !isCorrectAnswer;

				const colorAnswerStyle = props.showResults
					? isCorrectAnswer
						? s.green
						: isIncorrectAnswer
							? s.red
							: ''
					: '';

				return (
					<li key={index}
						 className={colorAnswerStyle}
					>
						<label>
							<SuperInput isSelected={isSelected} callBack={()=>handleChange(el)}/>
							{/*<input*/}
							{/*	type="checkbox"*/}
							{/*	checked={isSelected}*/}
							{/*	onChange={() => handleChange(el)}*/}
							{/*	// disabled={props.showResults}*/}
							{/*/>*/}
							{el}
						</label>
					</li>
				);
			})}
			</ul>
		</div>
	);
}