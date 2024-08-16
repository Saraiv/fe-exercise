import fs from 'fs'
import path from 'path'
import { NextResponse } from "next/server";
import { NextApiRequest } from 'next';
import json_data from "../../db/data.json"

export async function POST(req: NextApiRequest) {
    // Parsing the request to a json to new_user
    const new_user = await req.json()
    // General file path
    const file_path = path.join(process.cwd(), "src/app/db", "data.json")

    // Adding this new user to this json_data.users
    json_data.users.push(new_user)

    // Writing into the json file this new information
    fs.writeFileSync(file_path, JSON.stringify(json_data, null, 2))

    // Returning the response if its successfull or not
    return NextResponse.json({ message: "User registered successfully!" }, { status: 200 });
}