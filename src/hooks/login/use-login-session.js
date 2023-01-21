import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import jwtDecode from 'jwt-decode'
import { useNavigate } from "react-router-dom"

export function useLoginSession() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("jwt")
    if (token && !user) {
      setUser(jwtDecode(token))
    }
  }, [])

  const login = useCallback((username, password) => {
    setLoading(true)
    axios
      .post(`${process.env.REACT_APP_API}/api/Login/user`, {
        "username": username,
        "password": password,
      })
      .then((response) => { // gebruiker en jwt token zetten
        // setUser(response.data)
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
        navigate("/tickets")
      })
  }, [])

  const navigate = useNavigate()
  function logout() {
    localStorage.removeItem("jwt")
    delete axios.defaults.headers.common["Authorization"]
    setUser(null)
    navigate("/")
  }

  return { user, loading, error, login, logout }
}
