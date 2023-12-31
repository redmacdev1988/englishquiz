import {FC} from 'react'
import styled, {css} from 'styled-components'
import {device} from '../../../styles/BreakPoints'

const AnswerStyle = styled.div<{ highlightAnswer: boolean }>`
  font-size: clamp(18px, 4vw, 16px);
  color: ${({theme}) => theme.colors.secondaryText};
  font-weight: 400;
  border: 1px solid ${({highlightAnswer, theme}) =>
          highlightAnswer ? `${theme.colors.themeColor}` : `${theme.colors.border}`};
  background-color: ${({highlightAnswer, theme}) =>
          highlightAnswer ? `${theme.colors.selectedAnswer}` : `${theme.colors.answerBg}`};
  border-radius: 16px;
  margin-top: clamp(13px, calc(10px + 6 * ((100vw - 600px) / 1320)), 16px);
  cursor: pointer;
  ${({highlightAnswer}) =>
          highlightAnswer &&
          css`
            transition: border 0.2s ease-in;
          `} @media ${device.md} {
  font-weight: 500;
}

  input {
    visibility: hidden;
    margin: 0;
  }
`

const AnswerLabel = styled.label`
  padding: 18px;
  display: flex;
  cursor: pointer;
  @media ${device.md} {
    padding: 14px;
  }
`

const ChoiceLabel = styled.span``

const AnswerEditStyle = styled.div`
  font-size: clamp(18px, 4vw, 16px);
  color: ${({theme}) => theme.colors.secondaryText};
  font-weight: 400;
  border: 1px solid ${({theme}) => theme.colors.border};
  background-color: ${({theme}) => theme.colors.answerBg};
  border-radius: 10px;
  margin-top: clamp(13px, calc(10px + 6 * ((100vw - 600px) / 1320)), 16px);
  cursor: pointer;
}

textarea {
  margin: 0;
  width: 100%;
  min-height: 200px;
}
`


interface AnswerProps {
    index: number
    choice: string
    type: string
    selectedAnswer: string[]
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Answer: FC<AnswerProps> = ({onChange, index, choice, type, selectedAnswer}) => {
    // Convert index to alphabet character to show ABCD before question
    const label = String.fromCharCode(65 + index)

    return (
        <AnswerStyle key={index} highlightAnswer={selectedAnswer.includes(choice)}>
            <AnswerLabel>
                <ChoiceLabel>{label}.</ChoiceLabel>

                {(type === 'write') && <input type="type" name="text" value="enter text here"/>}

                {(type !== 'write') && <input
                    name={choice}
                    // radio is for checked one option and checkbox is for checked multiple options
                    type={type === 'MAQs' ? 'checkbox' : 'radio'}
                    checked={selectedAnswer.includes(choice)}
                    onChange={onChange}
                />}

                {type !== 'write' && choice}

            </AnswerLabel>
        </AnswerStyle>
    )
}

interface AnswerEditProps {
    inputAnswer: string
    onChange: (e: string) => void
}

export const AnswerEdit: FC<AnswerEditProps> = ({onChange, inputAnswer}) => {
    return (
        <AnswerEditStyle>
            <textarea placeholder='enter text here' value={inputAnswer}
                      onChange={e => onChange(e.target.value)}/>
        </AnswerEditStyle>
    )
}

