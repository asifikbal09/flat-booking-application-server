import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import { FlatServices } from "./flat.service"


const createFlat = catchAsync(async(req,res)=>{
    const result = await FlatServices.createFlatIntoDB(req.body)

    sendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Flat added successfully",
        data:result
    })
})

export const FlatController={
   createFlat,
}
