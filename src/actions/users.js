import { _saveQuestionAnswer } from "../utilis/_DATA";
import { addAnswerToQuestion } from "./questions";

export const GET_USERS = "GET_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

function addAnswerToUser(authUser, qid, answer) {
    return {
      type: ADD_ANSWER_TO_USER,
      authUser,
      qid,
      answer
    };
  }

export const addQuestionToUser = (id, authedUser) => {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    authedUser,
  };
};

export const handleSaveQuestionAnswer =
  (answer, qid) => (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(addAnswerToUser(authedUser, qid, answer))
    dispatch(addAnswerToQuestion(answer, qid))
    return _saveQuestionAnswer({
      qid,
      answer,
      authedUser,
    })
  }
