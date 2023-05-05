import { FORGOTPASSWORD, LOGIN, OTP, REGISTER } from "../Actions/GlobalType";


const InitalState={
    isloading : false,
    forgotpassword : {}, 
    loginAuth: {},
    registerAuth: {},
    otpAuth: {},
    isAuthenticated : false,
    userRole : "",
    token : ""
}

export const AuthReducers=(state= InitalState,action)=>{
    const data = action.payload;
    switch (action.type) {
        case LOGIN:
            return { 
                ...state,
                loginAuth: {...state.loginAuth,data},
              };
        case REGISTER:
            return {
                ...state,
                registerAuth: {...state.registerAuth,data},
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
        default:
            return state;
    }
}