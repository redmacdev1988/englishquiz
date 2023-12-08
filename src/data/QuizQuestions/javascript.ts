// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const javascript: Topic = {
  topic: 'Article',
  level: 'Beginner',
  totalQuestions: 14,
  totalScore: 125,
  activeQuestions: 10,
  totalTime: 240,
  questions: [
    {
      question:
        'Which of the following correct? (Select all that apply)',
      choices: ['My mother drives to work.', 'My father and I visit Disneyland.', 'We yells at the Taxi.', 'The horses run.'],
      type: 'MAQs',
      correctAnswers: ['My mother drives to work.', 'My father and I visit Disneyland.', 'The horses run.'],
      score: 10,
    },
    {
      question: ` [My brothers] is a 3rd person singular`,
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['False'],
      score: 5,
    },
    {
      question: 'Sylvia is starving. She _____ the food.',
      choices: ['nibbles on', 'chews', 'eats', 'devours'],
      type: 'MCQs',
      correctAnswers: ['devours'],
      score: 10,
    },
    {
      question:
        'Which of the following is correct?',
      choices: ['They kills time.', 'They shops for food.', 'Ricky and Todd work out.', 'Todd pump iron.'],
      type: 'MCQs',
      correctAnswers: ['Ricky and Todd work out.'],
      score: 10,
    },
    {
      question: 'What is the value of x after executing the following code snippet?',
      code: `let x = 5;
x += 2;
x *= 3;`,
      choices: ['21', '25', '33', '35'],
      type: 'MCQs',
      correctAnswers: ['25'],
      score: 10,
    },
    {
      question: 'What is the output of the following code snippet?',
      code: `console.log(typeof null);`,
      choices: ['Object', 'Null', 'Undefined', 'NullObject'],
      type: 'MCQs',
      correctAnswers: ['Object'],
      score: 10,
    },
    {
      question: 'Which of the following is NOT a valid JavaScript variable name?',
      choices: ['myVariable', '_variable', '123variable', '$variable'],
      type: 'MCQs',
      correctAnswers: ['123variable'],
      score: 10,
    },
    {
      question:
        'Which of the following methods is used to remove the last element from an array in JavaScript?',
      choices: ['push()', 'pop()', 'shift()', 'unshift()'],
      type: 'MCQs',
      correctAnswers: ['pop()'],
      score: 10,
    },
    {
      question: 'JavaScript is a case-sensitive language.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: 'What is the output of the following code snippet?',
      code: `console.log(2 + '2');`,
      choices: ['4', '22', '24', "'22'"],
      type: 'MCQs',
      correctAnswers: ['22'],
      score: 10,
    },
    {
      question: 'Which of the following is NOT a JavaScript data type?',
      choices: ['String', 'Boolean', 'Integer', 'Object'],
      type: 'MCQs',
      correctAnswers: ['Integer'],
      score: 10,
    },
    {
      question:
        'Which of the following are valid JavaScript loop statements? (Select all that apply)',
      choices: ['for', 'while', 'loop', 'do...while'],
      type: 'MAQs',
      correctAnswers: ['for', 'while', 'do...while'],
      score: 10,
    },
    {
      question: 'JavaScript is a statically typed language.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['False'],
      score: 5,
    },
    {
      question:
        'Which of the following is a valid way to comment a single line in JavaScript?',
      choices: [
        '// This is a comment',
        '/* This is a comment */',
        '<!-- This is a comment -->',
        '# This is a comment',
      ],
      type: 'MCQs',
      correctAnswers: ['// This is a comment'],
      score: 10,
    },
  ],
}
