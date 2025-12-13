import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { FlatServices } from "./flat.service";
import pick from "../../../shared/pick";
import { FlatsFilterAbleFields } from "./flat.constant";

const createFlat = catchAsync(async (req, res) => {
  const result = await FlatServices.createFlatIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Flat added successfully",
    data: result,
  });
});

const getAllFlat = catchAsync(async (req, res) => {
  const filters = pick(req.query, FlatsFilterAbleFields);

  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);

  const result = await FlatServices.getAllFlatsFromDB(filters, options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Flats retrieved successfully",
    meta: result.meta,
    data: result.result,
  });
});

const getSingleFlat = catchAsync(async (req, res) => {
  const { flatId } = req.params;
  const result = await FlatServices.getSingleFlatFromDB(flatId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Flat retrieved successfully",
    data: result,
  });
});

const updateFlat = catchAsync(async (req, res) => {
  const { flatId } = req.params;
  const result = await FlatServices.updateFlatInfoIntoDB(flatId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Flat information updated successfully",
    data: result,
  });
});

export const FlatController = {
  createFlat,
  getAllFlat,
  updateFlat,
  getSingleFlat,
};
