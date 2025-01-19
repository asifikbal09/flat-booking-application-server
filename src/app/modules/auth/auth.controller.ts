import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import { AuthServices } from "./auth.service"
import { JwtPayload } from "jsonwebtoken"



const loginUser = catchAsync(async(req,res)=>{
    const result = await AuthServices.loginAndGetToken(req.body)

    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"User logged in successfully",
        data:result
    })
})

const changeUserPassword = catchAsync(async(req,res)=>{
    const user = req.user
    await AuthServices.changeUserPasswordIntoDB(user.id,req.body)
    
    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Password changed successfully",
        data:null
    })
})

export const AuthController={
    loginUser,
    changeUserPassword
}