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

const RegisterPage = () => {
    const [show, setShow] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        console.log(data);


        const { data: res, error } = await authClient.signUp.email({
            name: data.name,
            email: data.email, // required
            password: data.password, // required
            callbackURL: "/",
        });

        console.log({ res, error });

        if (error) {
            alert(error.message);
        }

        if (res) {
            alert("Signup successful");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">

            <Form
                onSubmit={onSubmit}
                className="max-w-11/12 mx-auto bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-5"
            >
                <h2 className="text-2xl font-semibold text-center">
                    Create Account
                </h2>

                {/* Name */}
                <TextField fullWidth isRequired name="name">
                    <Label>Name</Label>
                    <Input placeholder="John Doe" />
                    <FieldError />
                </TextField>

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
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default RegisterPage;