import { ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER, GET_USERS } from "../actions/users";


export default function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER:
            const {id,authedUser}=action
            return{
                ...state,
                [authedUser]:{
                    ...state[authedUser],
                    questions:state[authedUser].questions.concat(id)
                    }
                }
        case ADD_ANSWER_TO_USER:
            const { authUser, qid, answer}=action
            return{
                ...state,
                [authUser]:{
                    ...state[authUser],
                    answers:{
                        ...state[authUser].answers,
                        [qid]:answer
                    }
                }
            }
        default:
            return state
    }
}