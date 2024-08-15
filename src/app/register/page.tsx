"use client"
import { format } from "path"
import React, { useState } from "react"

const Register = () => {
    const [form_data, SetFormData] = useState({
        username: "",
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
                    htmlFor="username">
                    Username:
                </label>
                <input
                    className="w-full bg-transparent mb-10"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    value={form_data.username}
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
                    className="block w-full bg-blue-300 hover:bg-opacity-95 rounded-md">
                    <button
                        className="w-full"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register