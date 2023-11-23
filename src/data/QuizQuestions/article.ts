// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const article: Topic = {
  topic: 'article',
  level: 'Beginner',
  totalQuestions: 15,
  totalScore: 150,
  totalTime: 240,
  questions: [
    {
      question: 'Which of the following is correct? (Select all that apply)',
      choices: [`I ate a orange.`, 'Please hand me book.', `Lets go to park.`, 'I want a burger.'],
      type: 'MAQs',
      correctAnswers: ['I want a burger.'],
      score: 10,
    },
    {
      question: `Is this sentence correct? "It is an honor."`,
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 10,
    },
    {
      question: `Is this sentence correct? "She is a United States senator."`,
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 10,
    },
    {
      question: 'Which of the following is correct? (Select multiple)',
      choices: ['Do you have a University in this town?', 'I bought a used car.', 'Always bring an umbrella.', 'This is an urgent matter.'],
      type: 'MAQs',
      correctAnswers: ['Do you have a University in this town?', 'I bought a used car.', 'Always bring an umbrella.', 'This is an urgent matter.'],
      score: 10,
    },
    {
        // because they refer to things that can’t be isolated and counted, they never take a or an. 
        //Uncountable nouns can be modified by indefinite adjectives like some, however
      question: 'Which one is wrong?', 
      choices: [
        'Please give me a water.', 
        'I want an orange.', 
        'I bought two apples and a banana.', 
        'Please give me coffee.'
      ],
      type: 'MCQs',
      correctAnswers: ['Please give me a water.'],
      score: 10,
    },
    {
        // Often, the article is omitted before a noun that refers to an abstract idea. i.e creativity
      question: `What is wrong with this sentence: "The creativity is a valuable quality in children."`,
      choices: ['The', 'a', 'valuable', 'in'],
      type: 'MCQs',
      correctAnswers: ['The'],
      score: 10,
    },
    {
        // The words for many languages and nationalities are not preceded by an article. 
        question: `Is this correct? "I studied French in high school for four years."`,
        choices: ['True', 'False'],
        type: 'boolean',
        correctAnswers: ['True'],
        score: 10,
    },
    {
        // Sports and academic subjects do not require articles. 
        question: `Is this correct? "I like to play the baseball."`,
        choices: ['True', 'False'],
        type: 'boolean',
        correctAnswers: ['False'],
        score: 10,
    },
    {
        // Sports and academic subjects do not require articles. 
      question: `Which sentence(s) are correct?`,
      choices: [`I love the internet`, `We can't live without Sun.`, `Let's look at the moon.`],
      type: 'MAQs',
      correctAnswers: ['The'],
      score: 10,
    },
    {
        question: `Is this sentence correct? "I will give you the moon." `,
        choices: ['True', 'False'],
        type: 'boolean',
        correctAnswers: ['True'],
        score: 10,
      },
    {
      question: `Is this sentence correct? "I will be there within an hour."`,
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 10,
    },
    {
      question: `Is this sentence correct? "They traveled to United States."`, // They traveled to 'The' United Statues.
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['False'],
      score: 10,
    },
    {
      question:
        'It is on ______ Saturday.',
      choices: ['a', 'an', 'the'],
      type: 'MAQs',
      correctAnswers: ['a'],
      score: 10,
    },
    {
      question: `What a beautiful day!`,
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 10,
    },
    {
      question: `I like to eat _____ dumplings.`,
      choices: [
        'the',
        'a',
        'some',
      ],
      type: 'MCQs',
      correctAnswers: ['some'],
      score: 10,
    },
  ],
}
