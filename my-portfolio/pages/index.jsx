import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolas YANG</title>
        <meta name="description" content="Nicolas YANG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mr.YANG
        </h1>

        <p className={styles.description}>
          Web developer
        </p>


      </main>

      <footer className={styles.footer}>
        <p>Made in Matoury</p>
      </footer>
    </div>
  )
}
