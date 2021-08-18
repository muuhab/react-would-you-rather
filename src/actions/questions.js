import { saveQuestion } from "../utilis/api"
import { _saveQuestionAnswer } from "../utilis/_DATA"

export const GET_QUESTIONS='GET_QUESTIONS'
export const ADD_QUESTION='ADD_QUESTION'
export const SAVE_QUESTION_ANSWER='SAVE_QUESTION_ANSWER'

export const getQuestions=(questions)=>{
    return{
        type:GET_QUESTIONS,
        questions
    }
}

export const addQuestion=(question)=>{
    return {
        type:ADD_QUESTION,
        question
    }

}

export const saveQuestionAnswer=(answer,qid,authedUser)=>{
    return {
        type:SAVE_QUESTION_ANSWER,
        answer,
        qid,
        authedUser
    }

}

export const handleSaveQuestion=(optionOneText,optionTwoText)=>(dispatch,getState)=>{
    const {authedUser}=getState()
    return saveQuestion({
        optionOneText,
        optionTwoText,
        author: authedUser
    })
    .then((question)=>dispatch(addQuestion(question)))
}

export const handleSaveQuestionAnswer=(answer,qid)=>(dispatch,getState)=>{
    const {authedUser}=getState()
    return _saveQuestionAnswer({
        qid,
        answer,
        authedUser
    })
    .then(()=>dispatch(saveQuestionAnswer(answer,qid,authedUser)))
}