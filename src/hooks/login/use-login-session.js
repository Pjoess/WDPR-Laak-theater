import { useState, useEffect } from "react"
import axios from "axios"

export function useLoginSession() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // fetch de user informatie vanuit de server
    async function fetchUser() {
      try {
        const response = await axios.get("/api/user")
        setUser(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  function login(username, password) {
    setLoading(true)
    axios
      .post("/api/login", {
        username,
        password,
      })
      .then((response) => { // gebruiker en jwt token zetten
        setUser(response.data)
        localStorage.setItem("jwt", response.data.token)
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  function logout() {
    localStorage.removeItem("jwt")
    delete axios.defaults.headers.common["Authorization"]
    setUser(null)
  }
}
