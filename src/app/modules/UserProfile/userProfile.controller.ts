import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserProFileServices } from "./userProfile.service";
import { Request, Response } from "express";


const getUserProfile = catchAsync(async(req:Request&{user?:any},res:Response)=>{
    const user = req.user
    const result = await UserProFileServices.getUserProfileFromDB(user)

    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"User profile retrieved successfully",
        data:result
    })
})

const updateUserProfile = catchAsync(async(req:Request&{user?:any},res:Response)=>{
    const user = req.user
    const result = await UserProFileServices.updateUserProfileFromDB(user,req.body)

    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"User profile updated successfully",
        data:result
    })
})

export const UserProfileController={
    getUserProfile,
    updateUserProfile
}
