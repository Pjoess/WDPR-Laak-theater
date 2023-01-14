import React, { useEffect, useState } from "react"
import axios from "axios"
import NavigationBar from "../../components/navigation-bar/navigation-bar"

function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])(?=.*[0-9])(?=.{8,})"
  )

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!username || !password) {
      setError("Voer een gebruikersnaam en wachtwoord in.")
      return
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Wachtwoord moet minimaal 1 hoofdletter, 1 kleine letter, 1 speciaal teken, 1 cijfer en 8 tekens bevatten."
      )
      return
    }

    try {
      const response = await axios.post("http://api/login", {
        username,
        password,
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
      if (!passwordRegex.test(password)) {
        setError(
          "Wachtwoord moet minimaal 1 hoofdletter, 1 kleine letter, 1 speciaal teken, 1 cijfer en 8 tekens bevatten!"
        )
      } else {
        setError("")
      }
    }
    handlePasswordChange()
  }, [password])

  return (
    <div>
      <NavigationBar />
      <div className="container">
        <h1 className="h1 mt-3 mb-3 font-weight-normal">Log in</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Gebruikersnaam:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            aria-describedby="username-error"
            className="form-control mb-3"
          />
          {!username && (
            <div id="username-error" className="alert alert-warning">
              Voer alstublieft een gebruikersnaam in.
            </div>
          )}
          <label htmlFor="password">
            Wachtwoord <br />
            (moet minimaal 1 hoofdletter, 1 kleine letter, 1 speciaal teken, 1
            cijfer en 8 tekens bevatten):
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            aria-describedby="password-error"
            className="form-control mb-3"
          />
          <br />
          {!password && (
            <div className="alert alert-warning" id="password-error">
              Voer alstublieft een wachtwoord in.
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
    </div>
  )
}

export default LoginPage
