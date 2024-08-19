"use client"

import Link from "next/link";
import { useState } from "react";
import json_data from "../db/data.json"

interface DashboardButtonProps {
    type: string;
    post: {
        id: number;
        userId: string;
        postedAt: string;
        title: string;
        text: string;
    };
}

export default function DashboardButton({ type, post }: DashboardButtonProps) {
    // Edit button
    const [show_edit, SetShowEdit] = useState(false)
    const [edited_text, SetEditedText] = useState(post.text)

    // Add button
    const [show_add, SetShowAdd] = useState(false)
    const [new_title, SetNewTitle] = useState("")
    const [new_text, SetNewText] = useState("")

    const HandleEdit = async (id: number) => {
        // Putting to the API edit the post
        const new_post = {
            id: post.id,
            userId: post.userId,
            postedAt: new Date(),
            title: post.title,
            text: edited_text,
        }

        const response = await fetch("/api/dashboard", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new_post),
        })

        // If everything goes accordingly to plan
        // and the response is 200 then it edits the post
        if (response.ok) {
            console.log("Post edited")
            SetShowEdit(false)
        } else {
            console.log("API error", response)
        }
    }

    const HandleRemove = async (id: number) => {
        // Posting to the API register with the new_user 
        // json information
        const response = await fetch("/api/dashboard", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(id),
        })

        // If everything goes accordingly to plan
        // and the response is 200 then it deletes the post
        if (response.ok) {
            console.log("Post removed")
        } else {
            console.log("API error", response)
        }
    }

    const HandleAdd = async () => {
        const new_post = {
            id: json_data.posts.length + 1,
            userId: post.userId,
            postedAt: new Date(),
            title: new_title,
            text: new_text,
        }

        const response = await fetch("/api/dashboard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new_post),
        })

        // If everything goes accordingly to plan
        // and the response is 200 then it adds the post
        if (response.ok) {
            console.log("Post Added")
            SetShowAdd(false)
        } else {
            console.log("API error", response)
        }
    }

    if (type === "EDIT") {
        return (
            <>
                {type === "EDIT" && (
                    <>
                        <button
                            className="mr-4 bg-blue-300 hover:bg-blue-400 text-white px-3 py-1 rounded"
                            onClick={() => SetShowEdit(true)}
                        >
                            {"Edit"}
                        </button>

                        {show_edit && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-stone-700 p-6 rounded-md w-1/3">
                                    <h2 className="text-xl mb-4">Edit Post</h2>
                                    <input
                                        className="w-full bg-transparent mb-4 border p-2"
                                        type="text"
                                        value={edited_text}
                                        onChange={(e) => SetEditedText(e.target.value)}
                                    />
                                    <div className="flex justify-end">
                                        <button
                                            className="bg-slate-300 hover:bg-slate-400 text-black px-3 py-1 rounded mr-2"
                                            onClick={() => SetShowEdit(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="bg-blue-300 hover:bg-blue-400 text-white px-3 py-1 rounded"
                                            onClick={() => HandleEdit(post.id)}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </>
        )
    } else if (type === "REMOVE") {
        return (
            <button className="mr-4 bg-red-300 hover:bg-red-400 text-white px-3 py-1 rounded" onClick={() => HandleRemove(post.id)}>{"Remove"}</button>
        )
    } else if (type === "ADD") {
        return (
            <>
                {type === "ADD" && (
                    <>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                            onClick={() => SetShowAdd(true)}
                        >
                            {"Add"}
                        </button>

                        {show_add && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-stone-700 p-6 rounded-md w-1/3">
                                    <h2 className="text-xl mb-4">Add New Post</h2>
                                    <input
                                        className="w-full bg-transparent mb-4 border p-2"
                                        type="text"
                                        placeholder="Title"
                                        value={new_title}
                                        onChange={(e) => SetNewTitle(e.target.value)}
                                    />
                                    <textarea
                                        className="w-full bg-transparent mb-4 border p-2"
                                        placeholder="Post content..."
                                        value={new_text}
                                        onChange={(e) => SetNewText(e.target.value)}
                                    />
                                    <div className="flex justify-end">
                                        <button
                                            className="bg-slate-300 hover:bg-slate-400 text-black px-3 py-1 rounded mr-2"
                                            onClick={() => SetShowAdd(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                                            onClick={HandleAdd}
                                        >
                                            Add Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </>
        )
    }

}
