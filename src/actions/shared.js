import { getInitialData } from "../utilis/api"
import { setAuthedUser } from "./authedUser"
import { getQuestions } from "./questions"
import { getUsers } from "./users"
import { showLoading,hideLoading } from 'react-redux-loading'

export const AUTHED_USER = 'Logout'

export const getData = () => (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
        dispatch(setAuthedUser(AUTHED_USER))
        dispatch(hideLoading())
    })
}