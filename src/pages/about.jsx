import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '/src/styles/Home.module.css'
import {Footer} from '/src/components/Footer'
import {Links} from '/src/components/Links'
import { Headline } from '/src/components/Headline'
import { Header } from '/src/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header></Header>
      <main className={styles.main}>
        <Headline
          title = "About Page"
          page = "about"
          number = {5}
          array = {[1, 2, 3]}
          obj = {{name:"hoge", age:21}}
          bool // trueの時はこの記述でOK(falseは省略できない)
          onClick = {() => alert("クリック")} // メソッドも渡せる
        >
          <code className={styles.code}>pages/about.js</code>
        </Headline>

        <Links />
      </main>
      <Footer/>
    </>
  )
}
