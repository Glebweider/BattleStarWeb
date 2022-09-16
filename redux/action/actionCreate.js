import { 
    SET_USERINFO,
    SET_USERDATA 
} from "../constants";

export function setuserinfo (text) {
    return{
    type: SET_USERINFO,
    text
}};
export const setUserData = (payload) => ({
    type: SET_USERDATA,
    token: payload.token,
    rank: payload.rank,
    uuid: payload.uuid,
    mail: payload.mail,
    username: payload.username,
    avatar: payload.avatar,
    country: payload.country,
    bio: payload.bio,
    datareg: payload.datareg,
    isAuth: payload.isAuth
});