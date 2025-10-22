"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <FieldGroup>
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
                                <div className="flex items-center ">
                                    <FieldLabel htmlFor="password">
                                        Password
                                    </FieldLabel>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
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
                                <Button type="submit">Login</Button>
                                <div className="flex items-center w-full">
                                    <div className="flex-grow h-px bg-gray-300" />
                                    <span className="px-3 text-sm text-gray-500 whitespace-nowrap">
                                        Or continue with
                                    </span>
                                    <div className="flex-grow h-px bg-gray-300" />
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Button
                                        variant="outline"
                                        type="button"
                                        className="w-1/2 cursor-pointer"
                                    >
                                        <GoogleIcon /> Google
                                    </Button>
                                    <Button
                                        variant="outline"
                                        type="button"
                                        className="w-1/2 cursor-pointer"
                                    >
                                        <FaApple /> Apple
                                    </Button>
                                </div>
                                <FieldDescription className="text-center">
                                    Don&apos;t have an account?{" "}
                                    <a href="/sign-up">Sign up</a>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
