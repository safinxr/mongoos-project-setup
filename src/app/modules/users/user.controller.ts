import { Request, Response } from "express";
import studentValidationSchema from "../student/student.validation";
import { userService } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;
    //   const zodValidation = studentValidationSchema.parse(studentData);
    const result = await userService.createStudentIntoDB(password, studentData);
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


export const userController = {
    createStudent,
}