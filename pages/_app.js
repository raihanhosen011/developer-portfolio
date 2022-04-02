import { AnimatePresence } from 'framer-motion'

import Layout from '../components/Layout'
import DataProvider from 'redux/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter >
      <DataProvider>
        <Layout>
          <Component {...pageProps} />             
        </Layout>   
      </DataProvider>    
    </AnimatePresence>
  )
}

export default MyApp
