import { cookies } from "next/headers"

export const GetToken = () => {
    return cookies().get("token")
}