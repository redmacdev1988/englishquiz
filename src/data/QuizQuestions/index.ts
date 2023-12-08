import {generalKnowledge} from './generalKnowledge'
import {javascript} from './javascript'
import {python} from './python'
import {react} from './react'
import {randomQuestion, subjverbagreement} from './subjverbagreement'
import {article} from './article'

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

type Choice = string
type CorrectAnswers = string[]

export type Question = {
    question: string
    choices: Choice[]
    type: 'MCQs' | 'MAQs' | 'write' | 'boolean'
    correctAnswers: CorrectAnswers
    score: number
    code?: string
    image?: string
}

export type Topic = {
    topic: string
    level: string
    totalQuestions: number
    totalScore: number
    totalTime: number
    activeQuestions: number
    questions: Question[]
}



export const quiz: Record<string, Topic> = {
    Article: article,
    SubVerbAgree: randomQuestion(),
    React: react,
    Python: python,
    'General Knowledge': generalKnowledge,
}

