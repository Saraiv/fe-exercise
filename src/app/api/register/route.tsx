import fs from 'fs'
import path from 'path'
import { NextResponse } from "next/server";
import { NextApiRequest } from 'next';
import json_data from "../../db/data.json"

export async function POST(req: NextApiRequest) {
    const new_user = await req.json()
    const file_path = path.join(process.cwd(), "src/app/db", "data.json")

    console.log(new_user)
    json_data.users.push(new_user)

    fs.writeFileSync(file_path, JSON.stringify(json_data, null, 2))

    return NextResponse.json({ message: "User registered successfully!" }, { status: 200 });
}