import { saveQuestion } from "../utilis/api"
import { addQuestionToUser } from "./users"
import { showLoading,hideLoading } from 'react-redux-loading'

export const GET_QUESTIONS='GET_QUESTIONS'
export const ADD_QUESTION='ADD_QUESTION'
export const ADD_ANSWER_TO_QUESTION='ADD_ANSWER_TO_QUESTION'

export const getQuestions=(questions)=>{
    return{
        type:GET_QUESTIONS,
        questions
    }
}
export const addAnswerToQuestion=(answer,qid)=>{
    return {
        type:ADD_ANSWER_TO_QUESTION,
        answer,
        qid
    }
}

export const addQuestion=(question)=>{
    return {
        type:ADD_QUESTION,
        question
    }

}



export const handleSaveQuestion=(optionOneText,optionTwoText)=>(dispatch,getState)=>{
    dispatch(showLoading())
    const {authedUser}=getState()
    return saveQuestion({
        optionOneText,
        optionTwoText,
        author: authedUser
    })
    .then((question)=>{
        dispatch(addQuestion(question))
        dispatch(addQuestionToUser(question.id,authedUser))
        dispatch(hideLoading())
    }
    )
}

