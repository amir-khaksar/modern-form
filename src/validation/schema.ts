import { z } from "zod";

export const loginSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const registerSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    phone: z.string().regex(/^09\d{9}$/, "Invalid mobile phone number"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});
