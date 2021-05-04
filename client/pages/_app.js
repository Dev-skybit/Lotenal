// Libraries imports
import { AnimatePresence } from 'framer-motion'

// Styles imports
import '../scss/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
