"use server"
import { randomUUID } from "crypto"
import { cookies } from "next/headers"

export async function SetCookiesAndReplace(user_email: string) {
    // Set the cookies token to the user email 
    cookies().set("token", user_email)
}