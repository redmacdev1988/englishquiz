// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const subjverbagreement: Topic = {
  topic: 'subjverbagreement',
  level: 'Beginner',
  totalQuestions: 15,
  totalScore: 150,
  totalTime: 240,
  questions: [
    {
      question: 'Which of the following is correct? (Select all that apply)',
      choices: ['My mother drives to work.', 'My father and I visit Disneyland.', 'We yells at the Taxi.', 'The horses run.'],
      type: 'MAQs',
      correctAnswers: ['My mother drives to work.', 'My father and I visit Disneyland.', 'The horses run.'],
      score: 10,
    },
    {
      question: `She buys oranges.`,
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 10,
    },
    {
      question: 'Sylvia is starving. She _____ the food.',
      choices: ['nibbles on', 'tastes', 'tries', 'devours'],
      type: 'MCQs',
      correctAnswers: ['devours'],
      score: 10,
    },
    {
      question: 'Which of the following is correct?',
      choices: ['They kills time.', 'They shops for food.', 'Ricky and Todd work out.', 'Todd pump iron.'],
      type: 'MCQs',
      correctAnswers: ['Ricky and Todd work out.'],
      score: 10,
    },
    {
      question: 'Which one is wrong?', // Words that indicate a portion (all, some..etc), including percentages, use the number of the noun they describe. 
      choices: [
        'All of the book is ruined!', 
        'All of the books are ruined!', 
        'Some of the films are funny. ', 
        'Fifty percent of the houses is made of wood. '
      ],
      type: 'MCQs',
      correctAnswers: ['Fifty percent of the houses is made of wood. '],
      score: 10,
    },
    {
      question: `What is wrong with this sentence: "There is a new maps in the drawer."`,
      choices: ['is', 'a', 'new', 'maps'],
      type: 'MCQs',
      correctAnswers: ['maps'],
      score: 10,
    },
    {
        question: `Is this correct? "A can of beans sits on the shelf."`,
        choices: ['True', 'False'],
        type: 'boolean',
        correctAnswers: ['True'],
        score: 10,
    },
    {
        question: `Is this correct? "The women who went to the meeting were bored."`,
        choices: ['True', 'False'],
        type: 'boolean',
        correctAnswers: ['True'],
        score: 10,
    },
    {
      question: 'The students or the teacher has to inform the principal. ',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 10,
    },
    {
        question: `Is this sentence correct? "The teacher or the students have to inform the principal." `,
        choices: ['True', 'False'],
        type: 'boolean',
        correctAnswers: ['True'],
        score: 10,
      },
    {
      question: `What is wrong with this sentence? "Either blue or green works for the wallpaper color." `,
      choices: ['works', 'for', 'the', 'color', 'none'],
      type: 'MCQs',
      correctAnswers: ['none'],
      score: 10,
    },
    {
      question: 'The teacher ______ to inform the principal.',
      choices: ['has', 'have'],
      type: 'MCQs',
      correctAnswers: ['has'],
      score: 10,
    },
    {
      question:
        'Students ______ to inform the principal.',
      choices: ['has', 'have'],
      type: 'MAQs',
      correctAnswers: ['have'],
      score: 10,
    },
    {
      question: `Is this correct? 'Do you know where the train station is?' `,
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 10,
    },
    {
      question: `____ anyone know where the train station is? `,
      choices: [
        'Do',
        'Does',
        'Did',
        `Do's`,
      ],
      type: 'MCQs',
      correctAnswers: ['Does'],
      score: 10,
    },
  ],
}
