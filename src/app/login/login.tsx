"use server"
import { randomUUID } from "crypto"
import { cookies } from "next/headers"

export async function SetCookiesAndReplace() {
    // Set the cookies token to a random ID
    cookies().set("token", randomUUID())
}