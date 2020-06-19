import * as LikesApiUtil from '../util/likes_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes,
})

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like,
})

const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId,
})

export const fetchLikes = () => dispatch => (
    LikesApiUtil.fetchLikes()
        .then(likes => dispatch(receiveLikes(likes)))
)

export const createLike = like => dispatch => (
    LikesApiUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
)

export const deleteLike = likeId => dispatch => (
    LikesApiUtil.deleteLike(likeId)
        .then(() => dispatch(removeLike(likeId)))
)