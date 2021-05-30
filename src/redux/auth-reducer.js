// 상태 초기값 선언
const initialState = {
    uid: '',
    authToken: '',
};

// 액션 타입 선언
const SET_UID = 'auth/setUid';
const SET_AUTH_TOKEN = 'auth/setAuthToken';

// 액션 함수 선언
export const createSetUidAction = (uid) => ({type: SET_UID, uid});
export const createSetAuthToken = (authToken) => ({type: SET_AUTH_TOKEN, authToken});

const authReducer = (state = initialState, action) => {
    const { type, uid, authToken } = action;
    if(type === SET_UID) {
        return {...state, uid}
    } else if (type === SET_AUTH_TOKEN) {
        return {...state, authToken}
    }
    return state;
}

export default authReducer;