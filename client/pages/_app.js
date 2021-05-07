// React and Next imports
import { useEffect, useContext } from 'react'
import { AuthProvider, AuthContext } from '../helpers/AuthContext'

// Styles imports
import '../scss/main.scss'

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
