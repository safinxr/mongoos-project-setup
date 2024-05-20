import { StudentModel } from "./student.model";
import { Student } from "./student.interface";

const createStudentIntoDB = async (student: Student) => {
  // const result = await StudentModel.create(student);
  // return result;


  const createStudent = new StudentModel(student);
  const result = await createStudent.save();
};

const getAllStudentFromBD = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromBD = async (id: string) => {
  const result = await StudentModel.findOne({ id: id });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromBD,
  getSingleStudentFromBD,
};
