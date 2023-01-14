import NavigationBar from "../../components/navigation-bar/navigation-bar"
import React, { useEffect, useState } from "react"
import FooterComponent from "../../components/footer/footer"
import axios from "axios"

export default function SignupPage() {
    const [username, setUsername] = useState("")
    const [naam, setNaam] = useState("")
    const [birthday, setBirthday] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [error, setError] = useState("")
    // TODO: replace true/false with check for if the user is already logged in

    const passwordRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])(?=.*[0-9])(?=.{8,})"
    )

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!username || !password1 && !password2) {
            setError("Voer een gebruikersnaam en wachtwoord in.")
            return
        }

        if (!passwordRegex.test(password1) && !passwordRegex.test(password2)) {
            setError(
                "Wachtwoord moet minimaal 1 hoofdletter, 1 kleine letter, 1 speciaal teken, 1 cijfer en 8 tekens bevatten."
            )
            return
        }

        try {
            const response = await axios.post("http://api/login", {
                username,
                password1,
                password2,
            })
            if (response.data.status === "success") {
                // TODO: handle successful login
            } else {
                setError("Incorrecte gebruikersnaam of wachtwoord.")
            }
        } catch (error) {
            setError("Er is een fout opgetreden bij het inloggen.")
        }
    }

    useEffect(() => {
        // runt elke keer dat de wachtwoord is veranderd
        function handlePasswordChange() {
            if (!passwordRegex.test(password1) && !passwordRegex.test(password2)) {
                setError(
                    "Wachtwoord moet minimaal 1 hoofdletter, 1 kleine letter, 1 speciaal teken, 1 cijfer en 8 tekens bevatten!"
                )
            } else {
                setError("")
            }
        }
        handlePasswordChange()
    }, [password1, password2])
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <h1 className="h1 mt-3 mb-3 font-weight-normal">Registreer</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Naam:</label>
                    <input type="text" id="name" value={naam} onChange={(event) => setNaam(event.target.value)} aria-describedby="name-error" className="form-control mb-3" />
                    {!naam && (
                        <div id="name-error" className="alert alert-warning">
                            Voer alstublieft een naam in.
                        </div>
                    )}
                    <label htmlFor="userName">Username:</label>
                    <input type="text" id="userName" value={username} onChange={(event) => setUsername(event.target.value)} aria-describedby="username-error" className="form-control mb-3" />
                    {!naam && (
                        <div id="name-error" className="alert alert-warning">
                            Voer alstublieft een gebruikersnaam in.
                        </div>
                    )}
                    <label for="birthday">Birthday:</label>
                    <input type="text" id="birthday" placeholder="31-06-1998" value={birthday} onChange={(event) => setBirthday(event.target.value)} aria-describedby="birthday-error" className="form-control mb-3" />
                    {!birthday && (
                        <div className="alert alert-warning" id="birthday-error">
                            Voer alstublieft uw geboortedatum in.
                        </div>
                    )}

                    <label htmlFor="password1"> Wachtwoord <br /> (moet minimaal 1 hoofdletter, 1 kleine letter, 1 speciaal teken, 1 cijfer en 8 tekens bevatten):</label>
                    <input type="password1" id="password1" value={password1} onChange={(event) => { setPassword1(event.target.value) }} aria-describedby="password1-error" className="form-control" />
                    <br />
                    {!password1 && (
                        <div className="alert alert-warning" id="password1-error">
                            Voer alstublieft een wachtwoord in.
                        </div>
                    )}

                    <label htmlFor="password2"> Bevestig wachtwoord <br /> (moet minimaal 1 hoofdletter, 1 kleine letter, 1 speciaal teken, 1 cijfer en 8 tekens bevatten):</label>
                    <input type="password2" id="password2" value={password2} onChange={(event) => { setPassword2(event.target.value) }} aria-describedby="password2-error" className="form-control mb-3" />
                    {!(password1 == password2) &&(
                        <div className="alert alert-warning" id="password-error">
                            Voer alstublieft opnieuw uw zelfde wachtwoord in.
                        </div>
                    )}

                    {error && (
                        <div class="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}
                    <button type="submit" className="btn btn-primary mb-3">
                        Inloggen
                    </button>
                </form>
            </div>
            <FooterComponent />
        </div>
    )
}
