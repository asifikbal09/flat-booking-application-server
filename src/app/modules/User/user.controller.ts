import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserServices } from "./user.service";

const createUser = catchAsync(async(req,res)=>{
    const result = await UserServices.createUserIntoDB(req.body)

    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"User registered successfully",
        data:result
    })
})

export const UserController={
    createUser,
}
