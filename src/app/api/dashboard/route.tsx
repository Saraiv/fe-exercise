import { NextApiRequest } from "next"
import path from "path"
import fs from "fs"
import json_data from "../../db/data.json"
import { NextResponse } from "next/server"

// DELETE CALL
export async function DELETE(req: NextApiRequest) {
    // Parsing the request to a json to new_user
    const postid = await req.json()
    // General file path
    const file_path = path.join(process.cwd(), "src/app/db", "data.json")

    // Getting the exact post with the given ID
    // After removing that in the JSON with the function slice
    const _postid = json_data.posts.findIndex((o) => o.id === postid)
    json_data.posts.splice(_postid, 1)

    // Writing into the json file this new information
    fs.writeFileSync(file_path, JSON.stringify(json_data, null, 2))

    // Returning the response if its successfull or not
    return NextResponse.json({ message: "Post removed successfully!" }, { status: 200 });
}

// ADD CALL
export async function POST(req: NextApiRequest) {
    // Parsing the request to a json to new_post
    const new_post = await req.json()
    // General file path
    const file_path = path.join(process.cwd(), "src/app/db", "data.json")

    // Adding the new post
    json_data.posts.push(new_post)

    // Writing into the json file this new information
    fs.writeFileSync(file_path, JSON.stringify(json_data, null, 2))

    // Returning the response if its successfull or not
    return NextResponse.json({ message: "Post registered successfully!" }, { status: 200 });
}

// EDIT CALL
export async function PUT(req: NextApiRequest) {
    // Parsing the request to a json to new_user
    const new_post = await req.json()
    // General file path
    const file_path = path.join(process.cwd(), "src/app/db", "data.json")

    // Get the post index
    const _postid = json_data.posts.findIndex((o) => o.id === new_post.id)
    // Deleting so I can edit inside the DB
    json_data.posts.splice(_postid, 1)
    // Addid the new edited post
    json_data.posts.push(new_post)

    // Writing into the json file this new information
    fs.writeFileSync(file_path, JSON.stringify(json_data, null, 2))

    // Returning the response if its successfull or not
    return NextResponse.json({ message: "Post removed successfully!" }, { status: 200 });
}