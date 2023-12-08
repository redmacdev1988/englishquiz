import { ReactNode } from 'react'
import { ReactComponent as Angular } from '../assets/icons/angular.svg'
import { ReactComponent as CSS } from '../assets/icons/css-3.svg'
import { ReactComponent as Django } from '../assets/icons/dj.svg'
import { ReactComponent as Gatsby } from '../assets/icons/gatsby.svg'
import { ReactComponent as JavaScript } from '../assets/icons/javascript.svg'
import { ReactComponent as Kotlin } from '../assets/icons/kotlin.svg'
import { ReactComponent as Laravel } from '../assets/icons/laravel.svg'
import { ReactComponent as Python } from '../assets/icons/python.svg'
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg'
import { ReactComponent as BulbIcon } from '../assets/icons/bulb.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
  title: 'Article',
    icon: <ReactIcon />,
  },
  {
    title: 'SubVerbAgree',
    icon: <JavaScript />,
  },
  {
    title: 'Capitalization',
    icon: <Python />,
  },
  {
    title: 'Present Tense',
    icon: <BulbIcon />,
  },
  {
    title: 'Past Tense',
    icon: <Gatsby />,
    disabled: true,
  },
  {
    title: 'Future Tense',
    icon: <Angular />,
    disabled: true,
  },
  {
    title: 'Sentence Structures',
    icon: <Django />,
    disabled: true,
  },
  {
    title: 'Correlative Conjunctions',
    icon: <CSS />,
    disabled: true,
  },
  {
    title: 'Subordinate Conjunctions',
    icon: <Kotlin />,
    disabled: true,
  },
  {
    title: 'Infinitives',
    icon: <Laravel />,
    disabled: true,
  },
  {
    title: 'Gerunds',
    icon: <Laravel />,
    disabled: true,
  },
]
