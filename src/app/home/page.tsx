import { cookies } from "next/headers"

const GetToken = () => {
    const token = cookies().get("token")
    return token
}

const Home = () => {
    const token = GetToken()

    if (token) {
        return (
            <div>

            </div>
        )
    }
    else {
        window.location.replace("login")
    }

}

export default Home