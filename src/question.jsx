import { RichText } from "@wordpress/block-editor";

export const QuizQuestion = () => {
	registerBlockType("plexi/question", {
		parent: ["plexi/quiz"],
		attributes: {
			blockClass: {
				type: "string",
				default: "plexi-quiz-question",
			},
			question: {
				type: "string",
				default: "What's your question?",
			},
		},
		edit: ({ attributes: at, setAttributes }) => {
			return (
				<div {...blockProps}>
					<RichText
						tagName={"h3"}
						value={at.question}
						onChange={(value) => setAttributes({ question: value })}
						placeholder={__("What's your question?")}
						allowedFormats={[]}
					/>
				</div>
			);
		},
		save: ({ attributes: at }) => {
			const blockProps = useBlockProps.save({ className: at.blockClass });
			return (
				<div {...blockProps}>
					<RichText.Content />
				</div>
			);
		},
	});
};
