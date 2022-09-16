import { SET_USERDATA } from "../constants";

const initialState = {
    token: null,
    uuid: null,
    mail: null,
    login: null,
    avatar: null,
    ip: null,
    info: [],
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERDATA:
            return {
                ...state,
                ...action.data
            };
        default: 
            return state;
    }
}
export default authReducer;