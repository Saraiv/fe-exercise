"use server"
import { cookies } from "next/headers";

export async function GetToken() {
    return cookies().get("token")
}