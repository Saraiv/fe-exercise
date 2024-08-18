"use client"

import Link from "next/link";

interface DashboardButtonProps {
    _id: number;
    text: string;
    type: string;
}

export default function DashboardButton({ _id, text, type }: DashboardButtonProps) {
    const HandleEdit = async (id: number) => {
        // Putting to the API edit the post
        const response = await fetch("/api/dashboard", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(id),
        })

        // If everything goes accordingly to plan
        // and the response is 200 then it edits the post
        if (response.ok) {
            console.log("Post edited")
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

    if (type === "EDIT") {
        return (
            <Link href="editpost">
                <button className="mr-4 bg-blue-300 hover:bg-blue-400 text-white px-3 py-1 rounded" onClick={() => HandleEdit(_id)}>{text}</button>
            </Link>
        )
    } else if (type === "REMOVE") {
        return (
            <button className="mr-4 bg-red-300 hover:bg-red-400 text-white px-3 py-1 rounded" onClick={() => HandleRemove(_id)}>{text}</button>
        )
    } else if (type === "ADD") {
        return (
            <Link href="addpost"><button className="bg-green-500 text-white px-4 py-2 rounded-md">{text}</button></Link>
        )
    }

}
