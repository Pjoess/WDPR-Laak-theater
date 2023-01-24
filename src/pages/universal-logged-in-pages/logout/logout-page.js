import { useEffect } from 'react'
import { UseLoginSession } from "../../../hooks/login/use-login-session"

export default function LogoutPage() {
    const { logout } = UseLoginSession()

    useEffect(() => {
        logout()
    }, [])

    return (
        <div>
            <h1>U wordt uitgelogd...</h1>
        </div>
    )
}
