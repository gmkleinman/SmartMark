import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const fetchUser = userId => dispatch => {
    return(
        UserApiUtil.fetchUser(userId)
            .then(user => dispatch(receiveUser(user)))
    )
}

export const fetchUsers = () => dispatch => {
    return(
        UserApiUtil.fetchUsers()
            .then(users => dispatch(receiveUsers(users)))
    )
}