import { Schema, model } from "mongoose";
import { Guardian, LocalGuardian, Student, UserName } from "./student/student.interface";


// creating Schema
const userNameSchema = new Schema<UserName>({
    fastName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  })

const guardianSchema = new Schema<Guardian>({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNO: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNO: { type: String, required: true },
  })

const localGuardian = new Schema<LocalGuardian>({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNO: { type: String, required: true },
    address: { type: String, required: true },
  })

const studentSchema = new Schema<Student>({
  id: { type: String },

  name:userNameSchema ,
  gender: ["male", "female"],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNO: { type: String, required: true },
  emergencyContactNO: { type: String, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardian,
  isActive: ["active", "block"],
  profileImg: { type: String },
});

// creating module

export const StudentModel = model<Student>("Student", studentSchema);