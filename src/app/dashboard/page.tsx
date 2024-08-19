"use server"
import Link from "next/link"
import json_data from "../db/data.json"
import { GetToken } from "./dashboard"
import DashboardButton from "./button-dashboard"

const Dashboard = () => {
    // Get the cookie token
    const token = GetToken()

    // TODO: Make token name the username so I can use the edit/remove and add buttons

    // If there's a cookie then I'll show the dashboard
    if (token) {
        // Get the actual user with the token
        const user_name = json_data.users.find(user => user.email === token.value)
        return (
            <div className="block bg-stone-700 text-center w-2/3 justify-center mx-auto my-10 p-10 rounded-md">
                <h1 className="text-white text-2xl mb-5">Hello {user_name?.firstName}</h1>
                {(() => {
                    // Find the first post where the userId matches the logged-in user's id
                    const user = json_data.users.find(user => user.email === token.value)
                    const userPost = json_data.posts.find(post => post.userId === user?.id)

                    // If a matching post is found, return the DashboardButton
                    if (userPost) {
                        return <DashboardButton type={"ADD"} post={userPost} />
                    }
                })()}
                {
                    json_data.posts.map((post, index) => {
                        const user = json_data.users.find(user => user.id === post.userId)
                        const isUserPost = post.userId === user_name?.id

                        return (
                            <div key={index} className="text-left mb-5 p-5">
                                <h2 className="text-xl text-blue-300">{post.title}</h2>
                                <p><strong>User:</strong> {user ? `${user.firstName} ${user.lastName}` : "Unknown User"}</p>
                                <p><strong>Posted At:</strong> {new Date(post.postedAt).toLocaleString()}</p>
                                <p><strong>Content:</strong> {post.text}</p>

                                {
                                    isUserPost && (
                                        <div className="mt-4">
                                            <DashboardButton type={"EDIT"} post={post} />
                                            <DashboardButton type={"REMOVE"} post={post} />
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    // If there's no cookie I'll show some text to create an account or log into the account
    else {
        return (
            <div className="w-full text-center">
                <h1 className="block">You need to create an account first!</h1>
                <Link className="block" href="/register">Create your account</Link>
                <Link className="block" href="/login">Login!</Link>
            </div>
        )
    }

}

export default Dashboard