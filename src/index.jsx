import React, { useState, useEffect } from "react";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, PanelRow, ToggleControl } from "@wordpress/components";
import "./style.scss";
import "./editor.scss"; // Import your stylesheet (optional)
import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	edit: function ({ attributes, setAttributes }) {
		const [questions, setQuestions] = useState([]); // Stores questions and answers
		const [showQuestionText, setShowQuestionText] = useState(true); // State for toggling question text editor

		const blockProps = useBlockProps();

		// Function to add a new question
		const addQuestion = () => {
			setQuestions([...questions, { question: "", choices: [], answer: "" }]);
		};

		// Function to handle changes in question text
		const handleQuestionChange = (index, value) => {
			const newQuestions = [...questions];
			newQuestions[index].question = value;
			setQuestions(newQuestions);
		};

		// Function to add a new answer choice
		const addChoice = (questionIndex) => {
			const newQuestions = [...questions];
			newQuestions[questionIndex].choices.push("");
			setQuestions(newQuestions);
		};

		// Function to handle changes in answer choice text
		const handleChoiceChange = (questionIndex, choiceIndex, value) => {
			const newQuestions = [...questions];
			newQuestions[questionIndex].choices[choiceIndex] = value;
			setQuestions(newQuestions);
		};

		// Function to set the correct answer for a question
		const setCorrectAnswer = (questionIndex, choiceIndex) => {
			const newQuestions = [...questions];
			newQuestions[questionIndex].answer = choiceIndex;
			setQuestions(newQuestions);
		};

		// Function to remove a question
		const removeQuestion = (index) => {
			const newQuestions = [...questions];
			newQuestions.splice(index, 1);
			setQuestions(newQuestions);
		};

		// Save quiz data to block attributes
		useEffect(() => {
			setAttributes({ questions });
		}, [questions, setAttributes]);

		return (
			<div {...blockProps}>
				{questions.map((question, index) => (
					<div key={index}>
						<InspectorControls>
							<PanelBody title={"Quiz Settings"}>
								<PanelRow>
									<ToggleControl
										label={"Show Question Text Editor"}
										checked={showQuestionText}
										onChange={() => setShowQuestionText(!showQuestionText)}
									/>
								</PanelRow>
							</PanelBody>
						</InspectorControls>
						<h3>
							{"Question"}
							{index + 1}:
						</h3>
						<RichText
							tagName="h3"
							value={question.question}
							allowedFormats={["core/bold", "core/italic"]}
							onChange={(value) => handleQuestionChange(index, value)}
							placeholder={"Enter your quiz question here..."}
						/>
						{question.choices.map((choice, choiceIndex) => (
							<div key={choiceIndex}>
								<input
									type="text"
									value={choice}
									onChange={(e) =>
										handleChoiceChange(index, choiceIndex, e.target.value)
									}
								/>
								<input
									type="radio"
									checked={question.answer === choiceIndex}
									onChange={() => setCorrectAnswer(index, choiceIndex)}
								/>
								<label>
									{"Choice"}
									{choiceIndex + 1}
								</label>
							</div>
						))}
						<button onClick={() => addChoice(index)}>{"Add Choice"}</button>
						<button onClick={() => removeQuestion(index)}>
							{"Remove Question"}
						</button>
					</div>
				))}
				<button onClick={addQuestion}>{"Add Question"}</button>
			</div>
		);
	},

	save: function ({ attributes }) {
		const { questions } = attributes;
		console.log(attributes, "attributes");

		return (
			<div>
				{questions.length > 0 &&
					questions.map((question, index) => (
						<div key={index}>
							{/* <h3>{__('Question', 'my-plugin')}{index + 1}:</h3> */}
							<p>{question.question}</p>
							<ul>
								{question.choices.map((choice, choiceIndex) => (
									<li key={choiceIndex}>
										{choice}
										{question.answer === choiceIndex && <b>(Correct)</b>}
									</li>
								))}
							</ul>
						</div>
					))}
			</div>
		);
	},
});