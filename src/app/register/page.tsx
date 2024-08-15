"use client"
import React, { useState } from "react"
import Link from "next/link"
import json_data from "../db/data.json"

const Register = () => {
    const [form_data, SetFormData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        confirm_password: "",
    })

    const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        SetFormData({
            ...form_data,
            [name]: value,
        });
    }

    const RegisterAccount = (event: React.FormEvent) => {
        event.preventDefault()
        console.log("User: ", form_data)
        if (form_data.password === form_data.confirm_password) {
            console.log("Successfully registered!")
            try {
                const new_user = {
                    id: String(json_data.users.length + 1),
                    email: form_data.email,
                    password: form_data.password,
                    firstName: form_data.first_name,
                    lastName: form_data.last_name,
                }

                json_data.users.push(new_user)
                //TODO: ADD TO FILE
            } catch (error) {
                console.log("Error reading file: ", error)
            }
        } else {
            console.log("Something went wrong!")
        }
    }

    return (
        <div className="block bg-stone-700 text-center w-1/3 justify-center mx-auto my-10 p-10 rounded-md">
            <form
                className="w-full pb-10"
                onSubmit={RegisterAccount}
            >
                <label
                    className="w-full"
                    htmlFor="Email">
                    Email:
                </label>
                <input
                    className="w-full bg-transparent mb-10"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    value={form_data.email}
                    onChange={HandleInputChange}
                    required
                />
                <label
                    className="w-full"
                    htmlFor="FirstName">
                    First legal name
                </label>
                <input
                    className="w-full bg-transparent mb-10"
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="First legal name"
                    value={form_data.first_name}
                    onChange={HandleInputChange}
                    required
                />
                <label
                    className="w-full"
                    htmlFor="LastName">
                    Last legal name
                </label>
                <input
                    className="w-full bg-transparent mb-10"
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Last legal name"
                    value={form_data.last_name}
                    onChange={HandleInputChange}
                    required
                />
                <label
                    className="w-full"
                    htmlFor="password">
                    Password
                </label>
                <input
                    className="w-full bg-transparent mb-10"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password..."
                    value={form_data.password}
                    onChange={HandleInputChange}
                    required
                />
                <label
                    className="w-full"
                    htmlFor="password">
                    Confirm Password
                </label>
                <input
                    className="w-full bg-transparent mb-10"
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Confirm Password..."
                    value={form_data.confirm_password}
                    onChange={HandleInputChange}
                    required
                />
                <div
                    className="block w-full bg-blue-300 hover:bg-opacity-95 rounded-md py-2">
                    <button
                        className="w-full"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
            </form>
            <p
                className="w-full block">
                Have an account already?
                <Link
                    replace
                    href="/login"
                    className="block text-xs no-underline mx-5 text-blue-300"
                >
                    Log in!
                </Link>
            </p>
        </div>
    )
}

export default Register