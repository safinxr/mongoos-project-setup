import { promises } from "dns";

export type UserName = {
  fastName: string;
  middleName?: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNO: string;
  motherName: string;
  motherOccupation: string;
  motherContactNO: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNO: string;
  address: string;
};
export type Student = {
  id: string;
  isActive: "active" | "block";
  profileImg?: string;
  name: UserName;
  gender: "male" | "female"|"other";
  dateOfBirth: string;
  email: string;
  contactNO: string;
  emergencyContactNO: string;
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
};


export type studentMethod = {
  isUserExist (id:string): Promise<Student>
}