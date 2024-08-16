"use server"
import { randomUUID } from "crypto"
import { cookies } from "next/headers"

export async function SetCookiesAndReplace() {
    cookies().set("token", randomUUID())
}