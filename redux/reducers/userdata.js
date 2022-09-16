import { SET_USERDATA } from "../constants";

const initialState = {
    token: "",
    rank: "",
    uuid: "",
    mail: "",
    username: "",
    avatar: "",
    country: "",
    bio: "",
    datareg: "",
    isAuth: false
};

const userdata = (state = initialState, {type, token, rank, uuid, mail, username, avatar, country, bio, datareg, isAuth}) => {
    switch (type) {
        case SET_USERDATA:
            return {
                ...state,
                token,
                rank,
                uuid,
                mail,
                username,
                avatar,
                country,
                bio,
                datareg,
                isAuth
            };
        default: return state;
 }
}
export default userdata;