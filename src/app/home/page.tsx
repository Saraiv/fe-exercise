"use server"
import Link from "next/link"
import json_data from "../db/data.json"
import { GetToken } from "./home"

const Home = () => {
    const token = GetToken()
    console.log(token)

    if (token) {
        return (
            <div className="block bg-stone-700 text-center w-2/3 justify-center mx-auto my-10 p-10 rounded-md">
                <h1 className="text-white text-2xl mb-5">All Posts</h1>
                {
                    json_data.posts.map((post, index) => {
                        const user = json_data.users.find(user => user.id === post.userId)

                        return (
                            <div key={index} className="text-left mb-5 p-5">
                                <h2 className="text-xl text-blue-300">{post.title}</h2>
                                <p><strong>User:</strong> {user ? `${user.firstName} ${user.lastName}` : "Unknown User"}</p>
                                <p><strong>Posted At:</strong> {new Date(post.postedAt).toLocaleString()}</p>
                                <p><strong>Content:</strong> {post.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
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

export default Home