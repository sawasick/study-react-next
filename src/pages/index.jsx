import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '/src/styles/Home.module.css'
import {Footer} from '/src/components/Footer'
import { Links } from '/src/components/Links'
import { Headline } from '/src/components/Headline'
import { Header } from '/src/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header></Header>
      <main className={styles.main}>
        <Headline title="Index Page" page="index">
          {/* ここに書いたものはchildrenとして渡る */}
          <code className={styles.code}>pages/index.js</code>
        </Headline>

        <Links />
      </main>
      <Footer/>
    </>
  )
}
