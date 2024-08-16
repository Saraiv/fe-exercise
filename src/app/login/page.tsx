"use client"
import React, { useState } from "react"
import Link from "next/link"
import json_data from "../db/data.json"
import { SetCookiesAndReplace } from "./login"

const LogIn = () => {
    const [form_data, SetFormData] = useState({
        email: "",
        password: ""
    })

    const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        SetFormData({
            ...form_data,
            [name]: value,
        })
    }

    const LogIntoHome = async (event: React.FormEvent) => {
        event.preventDefault()
        console.log("User: ", form_data)
        json_data.users.forEach(async element => {
            if (element.email === form_data.email && element.password === form_data.password) {
                await SetCookiesAndReplace()
                window.location.replace("home")
            }
        })
    }

    return (
        <div className="block bg-stone-700 text-center w-1/3 justify-center mx-auto my-10 p-10 rounded-md">
            <form
                className="w-full pb-10"
                onSubmit={LogIntoHome}
            >
                <label
                    className="w-full"
                    htmlFor="Email">
                    Username:
                </label>
                <input
                    className="w-full bg-transparent mb-10"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter username"
                    value={form_data.email}
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
                <div
                    className="block w-full bg-blue-300 hover:bg-opacity-95 rounded-md py-2">
                    <button
                        className="w-full"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
            <p
                className="w-full block">
                Not registered?
                <Link
                    replace
                    href="/register"
                    className="block text-xs no-underline mx-5 text-blue-300"
                >
                    Create account!
                </Link>
            </p>
        </div>
    )
}

export default LogIn
function GetToken() {
    throw new Error("Function not implemented.")
}
