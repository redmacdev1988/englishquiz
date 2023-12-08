// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple
// 3. write | text Answers

import {Question, Topic} from '.'
import {random} from 'lodash';

export const subjverbagreement: Topic = {
    topic: 'subjverbagreement',
    level: 'Beginner',
    totalQuestions: 5,
    totalScore: 150,
    activeQuestions: 5,
    totalTime: 240,
    questions: [
        {
            question: `this is text' `,
            choices: [],
            type: 'write',
            correctAnswers: [],
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

//随机从50 个 question中取出 固定activeQuestions 条 问题

export function randomQuestion(): Topic {
    let activeQuestions = subjverbagreement.activeQuestions

    const question: Question[] = [];
    const randomIndex: number[] = [];
    while (randomIndex.length < activeQuestions) {
        const randomNumber = random(0, subjverbagreement.totalQuestions-1);
        if (!randomIndex.includes(randomNumber)) {
            randomIndex.push(randomNumber);
        }
    }
    for (const index of randomIndex) {
        question.push(subjverbagreement.questions[index]);
    }

    subjverbagreement.questions = question
    return subjverbagreement
}

