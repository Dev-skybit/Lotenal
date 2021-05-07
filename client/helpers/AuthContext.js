import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState({
    username: "",
    id: 0,
    status: false
  })

  useEffect(() => {
    function loadUser() {
      const auth = JSON.parse(localStorage.getItem("accessToken"))

      if (auth) {
        console.log('You have a valid token')

        const user = ({
          email: auth.user.email,
          username: auth.user.username,
          id: auth.user.id,
          status: true
        })

        setIsAuth(user)
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