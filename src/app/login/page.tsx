import Link from "next/link"
import React from "react"

const LogIn = () => {
    function HandleLogin() {
        return
    }
    return (
        <div className="block bg-stone-700 text-center w-1/3 justify-center mx-auto my-10 p-10 rounded-md">
            <form
                className="w-full pb-10"
                action="">
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
                    required
                />
                <label
                    className="w-full"
                    htmlFor="password">
                    Password:
                </label>
                <input
                    className="w-full bg-transparent mb-10"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password..."
                    required
                />
                <div
                    className="block w-full py-2 bg-blue-300 hover:bg-opacity-95 rounded-md">
                    <button
                        className="w-full"
                        onSubmit={HandleLogin}
                    >
                        Log in
                    </button>
                </div>
            </form>
            <p
                className="w-full">
                Not registered?
                <Link
                    replace
                    href="/register"
                    className="text-xs no-underline mx-5 text-blue-300"
                >
                    Create account!
                </Link>
            </p>
        </div>
    )
}

export default LogIn