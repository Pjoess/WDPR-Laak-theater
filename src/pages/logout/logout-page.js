import { useEffect } from 'react'
import { useLoginSession } from "../../hooks/login/use-login-session"

export default function LogoutPage() {
    const { logout } = useLoginSession()

    useEffect(() => {
        logout()
    }, [])

    return (
        <div>
            <h1>U wordt uitgelogd...</h1>
        </div>
    )
}
