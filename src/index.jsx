import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { TextControl, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import './editor.scss';

const QuizBlock = ({ attributes, setAttributes }) => {
	const [questions, setQuestions] = useState(attributes.questions || []);

	const addQuestion = () => {
		const newQuestion = {
			questionText: "",
			answerOptions: [
				{ answerText: "", isCorrect: false },
				{ answerText: "", isCorrect: false },
				{ answerText: "", isCorrect: false },
				{ answerText: "", isCorrect: false }
			]
		};
		setQuestions([...questions, newQuestion]);
		setAttributes({ questions: [...questions, newQuestion] });
	};

	const updateQuestionText = (index, newText) => {
		const updatedQuestions = [...questions];
		updatedQuestions[index].questionText = newText;
		setQuestions(updatedQuestions);
		setAttributes({ questions: updatedQuestions });
	};

	const updateAnswerText = (questionIndex, answerIndex, newText) => {
		const updatedQuestions = [...questions];
		updatedQuestions[questionIndex].answerOptions[answerIndex].answerText = newText;
		setQuestions(updatedQuestions);
		setAttributes({ questions: updatedQuestions });
	};

	const updateCorrectAnswer = (questionIndex, correctIndex) => {
		const updatedQuestions = [...questions];
		updatedQuestions[questionIndex].answerOptions.forEach((answer, index) => {
			answer.isCorrect = index === correctIndex;
		});
		setQuestions(updatedQuestions);
		setAttributes({ questions: updatedQuestions });
	};

	return (
		<>
			<InspectorControls>
				<div>
					<Button onClick={addQuestion}>Add Question</Button>
				</div>
			</InspectorControls>
			<div className="quiz-block">
				{questions.map((question, questionIndex) => (
					<div key={questionIndex} className="question">
						<TextControl
							value={question.questionText}
							onChange={(newText) => updateQuestionText(questionIndex, newText)}
							placeholder="Enter question text"
						/>
						<ul className="answer-options">
							{question.answerOptions.map((answerOption, answerIndex) => (
								<li key={answerIndex}>
									<input
										type="radio"
										checked={answerOption.isCorrect}
										onChange={() => updateCorrectAnswer(questionIndex, answerIndex)}
									/>
									Correct
									<TextControl
										value={answerOption.answerText}
										onChange={(newText) => updateAnswerText(questionIndex, answerIndex, newText)}
										placeholder={`Enter answer option ${answerIndex + 1}`}
									/>

								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</>
	);
};

registerBlockType('namespace/quiz-block', {
	title: __('Quiz Block', 'namespace'),
	description: __('Block for creating a quiz with multiple questions and answers.', 'namespace'),
	icon: 'smiley',
	category: 'common',
	attributes: {
		questions: {
			type: 'array',
			default: []
		}
	},
	supports: {
		// Disable support for rendering on frontend
		html: false,
	},
	edit: QuizBlock,
	save: ({ attributes }) => {
		const { questions } = attributes;
		return (
			<div className="quiz-block" data={JSON.stringify(questions)}></div>
		);
	},
});
