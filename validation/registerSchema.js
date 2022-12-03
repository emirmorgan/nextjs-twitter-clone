import { object, string } from "yup";

const registerSchema = object({
  email: string().email().required(),
  username: string().min(3).max(30).required(),
  password: string().min(6).required(),
});

export default registerSchema;
