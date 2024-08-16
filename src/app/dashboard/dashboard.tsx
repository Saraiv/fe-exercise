import { cookies } from "next/headers"

export const GetToken = () => {
    // Returns the token where I can get the name which is "token"
    // and the random ID I gave inside login
    return cookies().get("token")
}