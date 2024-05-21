import * as z from "zod";

export const AddUser = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Valid email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});
