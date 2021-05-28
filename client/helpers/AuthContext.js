import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState({
    username: "",
    email: "",
    id: 0,
    status: false
  })

  useEffect(() => {
    function loadUser() {
      const auth = JSON.parse(localStorage.getItem("accessToken"))

      if (auth) {
        console.log('You have a valid token')

        let id = auth.user.id
        let user = {}

        axios.get(`http://localhost:3001/auth/profile/${id}`)
          .then((response) => {
            user = {
              username: response.data.username,
              email: response.data.email,
              id: response.data.id,
              status: true
            }
            setIsAuth(user)
          })
      }
    }
    loadUser()
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }