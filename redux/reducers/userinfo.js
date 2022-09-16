import { SET_USERINFO } from "../constants";

const initialState = {
    text: ''
};

const userinfo = (state = initialState, {type, text, action}) => {
    switch (type) {
        case SET_USERINFO:
            return {
                ...state,
                text: text
            };
        default: return state;
 }
}
export default userinfo;