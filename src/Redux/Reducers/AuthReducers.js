import { FORGOTPASSWORD, LOGIN, OTP, REGISTER , LOGOUT } from "../Actions/GlobalTypes";

const InitalState={
    isloading : false,
    isAuthenticated : false,
    forgotpassword : {}, 
    loginAuth: {},
    registerAuth: {},
    otpAuth: {}
}
export const AuthReducers=(state= InitalState,action)=>{
    const data = action.payload;
    switch (action.type) {
        case LOGIN:
            return { 
                ...state,
                loginAuth: {...state.loginAuth,data},
                isAuthenticated:true,
              };
        case REGISTER:
            return {
                ...state,
                registerAuth: {...state.registerAuth,data},
                isAuthenticated:true,
              };
        case FORGOTPASSWORD:
            return {
                ...state,
                forgotpassword:{...state.forgotpassword,data},
            }
        case OTP:
            return {
                ...state,
                otpAuth:{...state.otpAuth,data},
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated:false,
            }
        default:
            return state;
    }
}