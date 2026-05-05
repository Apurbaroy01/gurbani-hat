"use client";

import { useState } from "react";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";

const LoginPage = () => {
    const [show, setShow] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        console.log("register data", data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        console.log({ res, error });

        if (error) {
            alert(error.message);
        }

        if (res) {
            toast.success('Login Successfully!')
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">

            <Form
                onSubmit={onSubmit}
                className="max-w-11/12 mx-auto bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-5"
            >
                <h2 className="text-2xl font-semibold text-center">
                    Login Account
                </h2>

                {/* Email */}
                <TextField fullWidth isRequired name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                {/* Password */}
                <TextField
                    fullWidth
                    isRequired
                    name="password"
                    validate={(v) =>
                        v.length < 8 ? "Password must be at least 8 characters" : null
                    }
                >
                    <Label>Password</Label>

                    <div className="relative">
                        <Input
                            type={show ? "text" : "password"}
                            placeholder="Enter password"
                            className="pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShow(!show)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                            {show ? <EyeSlash /> : <Eye />}
                        </button>
                    </div>

                    <Description>Min 8 characters</Description>
                    <FieldError />
                </TextField>

                {/* Submit */}
                <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                >
                    <Check />
                    Login
                </Button>

                <p>Don&apos;t have an account? <Link href="/register" className="text-shadow-red-500 underline">Register</Link></p>
            </Form>
            
        </div>
    );
};

export default LoginPage;