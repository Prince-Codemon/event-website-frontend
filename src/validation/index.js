import * as Yup from 'yup'

export const loginSchema = new Yup.object({
  email: Yup.string().email('Enter a valid email').required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Pass is min 6 char long"),
});
export const registerSchema = new Yup.object({
  name: Yup.string().trim().required("Name is required").min(3, "Name is min 3 char long"),
  email: Yup.string().email('Enter a valid email').required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must 6 chars long"),
});