import { object, string } from "yup";

const loginSchema = object({
  email: string().email().min(3).max(30).required(),
  password: string().min(6).required(),
});

export default loginSchema;
