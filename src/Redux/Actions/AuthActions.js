import { FORGOTPASSWORD, LOGIN, OTP, REGISTER } from "./GlobalTypes"


export const loginUser=(userDetails)=>{
    return {
        type:LOGIN,
        payload: userDetails
    }
}

export const registerUser=(userDetails)=>{
    return {
        type:REGISTER,
        payload: userDetails
    }
}

export const forgotpassword = (forgotDetails)=>{
    return {
        type:FORGOTPASSWORD,
        payload:forgotDetails
    }
}

export const otp = (otpDetails) => {
    return {
        type:OTP,
        payload:otpDetails
    }
}



