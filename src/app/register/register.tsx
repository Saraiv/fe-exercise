"use server"
import { randomUUID } from "crypto"
import { cookies } from "next/headers"

export const SetCookiesAndReplace = () => {
    cookies().set("token", randomUUID())
}
