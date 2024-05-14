import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import { AuthServices } from "./auth.service"


const loginUser = catchAsync(async(req,res)=>{
    const result = await AuthServices.loginAndGetToken(req.body)

    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"User logged in successfully",
        data:result
    })
})

export const AuthController={
    loginUser
}