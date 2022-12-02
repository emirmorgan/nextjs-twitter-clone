import { object, string } from "yup";

const registerSchema = object({
  email: string().email().required(),
  uname: string().min(3).max(30).required(),
  fullname: string().required(),
  upass: string().min(6).required(),
});

export default registerSchema;
