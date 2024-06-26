/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);






const QuizBlock = ({
  attributes,
  setAttributes
}) => {
  const [questions, setQuestions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(attributes.questions || []);
  const addQuestion = () => {
    const newQuestion = {
      questionText: "",
      answerOptions: [{
        answerText: "",
        isCorrect: false
      }, {
        answerText: "",
        isCorrect: false
      }, {
        answerText: "",
        isCorrect: false
      }, {
        answerText: "",
        isCorrect: false
      }]
    };
    setQuestions([...questions, newQuestion]);
    setAttributes({
      questions: [...questions, newQuestion]
    });
  };
  const updateQuestionText = (index, newText) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].questionText = newText;
    setQuestions(updatedQuestions);
    setAttributes({
      questions: updatedQuestions
    });
  };
  const updateAnswerText = (questionIndex, answerIndex, newText) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answerOptions[answerIndex].answerText = newText;
    setQuestions(updatedQuestions);
    setAttributes({
      questions: updatedQuestions
    });
  };
  const updateCorrectAnswer = (questionIndex, correctIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answerOptions.forEach((answer, index) => {
      answer.isCorrect = index === correctIndex;
    });
    setQuestions(updatedQuestions);
    setAttributes({
      questions: updatedQuestions
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: addQuestion
  }, "Add Question"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "quiz-block"
  }, questions.map((question, questionIndex) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: questionIndex,
    className: "question"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    value: question.questionText,
    onChange: newText => updateQuestionText(questionIndex, newText),
    placeholder: "Enter question text"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "answer-options"
  }, question.answerOptions.map((answerOption, answerIndex) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: answerIndex
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    value: answerOption.answerText,
    onChange: newText => updateAnswerText(questionIndex, answerIndex, newText),
    placeholder: `Enter answer option ${answerIndex + 1}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    checked: answerOption.isCorrect,
    onChange: () => updateCorrectAnswer(questionIndex, answerIndex)
  }), "Correct")))))));
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('namespace/quiz-block', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quiz Block', 'namespace'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block for creating a quiz with multiple questions and answers.', 'namespace'),
  icon: 'editor-quiz',
  category: 'common',
  attributes: {
    questions: {
      type: 'array',
      default: []
    }
  },
  edit: QuizBlock,
  save: ({
    attributes
  }) => {
    const {
      questions
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "quiz-block",
      data: JSON.stringify(questions)
    }, questions.map((question, questionIndex) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: questionIndex,
      className: "question"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, question.questionText), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "answer-options"
    }, question.answerOptions.map((answerOption, answerIndex) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: answerIndex
    }, answerOption.isCorrect && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, answerOption.answerText), !answerOption.isCorrect && answerOption.answerText))))));
  }
});
/******/ })()
;
//# sourceMappingURL=index.js.map