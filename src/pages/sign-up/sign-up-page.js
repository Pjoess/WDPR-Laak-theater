import NavigationBar from "../../components/navigation-bar/navigation-bar"
import React, { useState } from "react"
import FooterComponent from "../../components/footer/footer"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function SignUpPage() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [birthday, setBirthday] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [error, setError] = useState("")

    const passwordRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])(?=.*[0-9])(?=.{8,})"
    )

    const handleSubmit = async (event) => {
        event.preventDefault()
        const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;

        if (!name) {
            setError("Voer je naam in.")
            return
        }

        if (!username) {
            setError("Voer een gebruikersnaam in.")
            return
        }

        if (!email) {
            setError("Voer een email in.")
            return
        }

        if (!dateFormat.test(birthday)) {
            setError("Voer een geldig geboortedatum in met de formaat DD/MM/YYYY ( DAG/MAAND/JAAR )");
            return
        }

        if (!passwordRegex.test(password1) && !passwordRegex.test(password2)) {
            setError(
                "Wachtwoord moet minimaal 1 hoofdletter, 1 kleine letter, 1 speciaal teken, 1 cijfer en 8 tekens bevatten."
            )
            return
        } else if (!password1 && !password2) {
            setError(
                "Wachtwoord en bevestig wachtwoord moeten gelijk zijn aan elkaar."
            )
            return
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/register/user`, {
                "name": name,
                "userName": username,
                "email": email,
                "passwordHash": password1,
                "role": "user",
                "orders": null,
            })
            if (response.status === 200) {
                setError("Registratie was succesvol. Log alsjeblieft in.")
                navigate("/login")
            } else if (response.status === 400) {
                setError("Deze gebruikersnaam is al in gebruik. Kies een ander gebruikersnaam.")
            }
        } catch (error) {
            setError("Er is een fout opgetreden bij het registreren.")
        }
    }
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <h1 className="h1 mt-3 mb-3 font-weight-normal">Registreer</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Naam:</label>
                    <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} aria-describedby="name-error" className="form-control mb-3" />
                    {!name && (
                        <div id="name-error" className="alert alert-warning">
                            Voer alstublieft een naam in.
                        </div>
                    )}
                    <label htmlFor="userName">Username:</label>
                    <input type="text" id="userName" value={username} onChange={(event) => setUsername(event.target.value)} aria-describedby="username-error" className="form-control mb-3" />
                    {!name && (
                        <div id="name-error" className="alert alert-warning">
                            Voer alstublieft een gebruikersnaam in.
                        </div>
                    )}
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)} aria-describedby="email-error" className="form-control mb-3" />
                    {!name && (
                        <div id="email-error" className="alert alert-warning">
                            Voer alstublieft een email in.
                        </div>
                    )}
                    <label htmlFor="birthday">Birthday:</label>
                    <input type="text" id="birthday" placeholder="31/06/1998" value={birthday} onChange={(event) => setBirthday(event.target.value)} aria-describedby="birthday-error" className="form-control mb-3" />
                    {!birthday && (
                        <div className="alert alert-warning" id="birthday-error">
                            Voer alstublieft uw geboortedatum in.
                        </div>
                    )}

                    <label htmlFor="password1"> Wachtwoord <br /> ( Moet minimaal 1 hoofdletter, 1 kleine letter, 1 speciaal teken, 1 cijfer en 8 tekens bevatten ):</label>
                    <input type="password" id="password1" value={password1} onChange={(event) => { setPassword1(event.target.value) }} aria-describedby="password1-error" className="form-control" />
                    <br />
                    {!password1 && (
                        <div className="alert alert-warning" id="password1-error">
                            Voer alstublieft een wachtwoord in.
                        </div>
                    )}

                    <label htmlFor="password2"> Bevestig wachtwoord:</label>
                    <input type="password" id="password2" value={password2} onChange={(event) => { setPassword2(event.target.value) }} aria-describedby="password2-error" className="form-control mb-3" />
                    {!(password1 === password2) && (
                        <div className="alert alert-warning" id="password-error">
                            Voer alstublieft opnieuw uw zelfde wachtwoord in.
                        </div>
                    )}

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}
                    <button type="submit" className="btn btn-primary mb-3">
                        Registreren
                    </button>
                </form>
            </div>
            <FooterComponent />
        </div>
    )
}
