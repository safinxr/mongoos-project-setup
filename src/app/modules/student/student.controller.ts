import { Request, Response } from "express";
import { studentServices } from "./student.service";
// import Joi from "joi";
import { z } from "zod";
import studentValidationSchema from "./student.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const zodValidation = studentValidationSchema.parse(studentData)
    const result = await studentServices.createStudentIntoDB(zodValidation);
    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Student creation unsuccessfully",
      data: err,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromBD();
    res.status(200).json({
      success: true,
      message: "All students",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await studentServices.getSingleStudentFromBD(id);
    res.status(200).json({
      success: true,
      message: "All students",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
