import { cookies } from "next/headers"
import Link from "next/link"
import json_data from "../db/data.json"

const GetToken = () => {
    const token = cookies().get("token")
    return token
}

const Home = () => {
    const token = GetToken()

    if (token) {
        return (
            <div className="block bg-stone-700 text-center w-2/3 justify-center mx-auto my-10 p-10 rounded-md">
                <h1 className="text-white text-2xl mb-5">All Posts</h1>
                {json_data.posts.map((post, index) => {
                    // Find the user who made the post
                    const user = json_data.users.find(user => user.id === post.userId)

                    return (
                        <div key={index} className="text-left mb-5 p-5">
                            <h2 className="text-xl text-blue-300">{post.title}</h2>
                            <p><strong>User:</strong> {user ? `${user.firstName} ${user.lastName}` : "Unknown User"}</p>
                            <p><strong>Posted At:</strong> {new Date(post.postedAt).toLocaleString()}</p>
                            <p><strong>Content:</strong> {post.text}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>You need to create an account first!</h1>
                <Link href='/register'>Create your account</Link>
            </div>
        )
    }

}

export default Home