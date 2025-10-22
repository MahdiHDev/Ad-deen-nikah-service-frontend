"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import GoogleIcon from "@/public/images/GoogleIcon";
import { useState } from "react";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

export function SignupForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        Create Account
                    </CardTitle>

                    <Button
                        variant="outline"
                        type="button"
                        className="cursor-pointer mt-4"
                    >
                        <GoogleIcon /> Sign up with Google
                    </Button>
                    <Button
                        variant="outline"
                        type="button"
                        className=" cursor-pointer mt-1"
                    >
                        <FaApple /> Sign up with Apple
                    </Button>
                    <div className="flex items-center w-full mt-2">
                        <div className="flex-grow h-px bg-gray-300" />
                        <span className="px-3 text-sm text-gray-500 whitespace-nowrap">
                            Or continue with
                        </span>
                        <div className="flex-grow h-px bg-gray-300" />
                    </div>
                </CardHeader>
                <CardContent>
                    <form>
                        <FieldGroup className="gap-2">
                            <Field>
                                <FieldLabel htmlFor="email">
                                    Full Name
                                </FieldLabel>
                                <Input
                                    id="full"
                                    type="tex"
                                    placeholder="example: John Doe"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">
                                        Password
                                    </FieldLabel>
                                </div>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        required
                                    />
                                    <button
                                        className="absolute top-[8px] right-[12px]"
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash className="cursor-pointer text-gray-500" />
                                        ) : (
                                            <FaEye className="cursor-pointer text-gray-500" />
                                        )}
                                    </button>
                                </div>
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">
                                        Confirm Password
                                    </FieldLabel>
                                </div>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        required
                                    />
                                    <button
                                        className="absolute top-[8px] right-[12px]"
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                    >
                                        {showConfirmPassword ? (
                                            <FaEyeSlash className="cursor-pointer text-gray-500" />
                                        ) : (
                                            <FaEye className="cursor-pointer text-gray-500" />
                                        )}
                                    </button>
                                </div>
                            </Field>
                            <Field>
                                <Button type="submit" className="mt-2">
                                    Login
                                </Button>

                                <FieldDescription className="text-center">
                                    Already have an account?{" "}
                                    <a href="/login">Login</a>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
