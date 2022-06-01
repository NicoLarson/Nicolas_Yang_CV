import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'
import TopBar from '../components/TopBar/TopBar'
import BottomBar from '../components/BottomBar/BottomBar'
import LangSelect from '../components/LangSelect/LangSelect'
import SwitchMode from '../components/SwitchMode/SwitchMode'
import InfosList from '../components/InfosList/InfosList'
import Logo from '../components/Logo/Logo'

export default function Infos() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolas YANG | Infos</title>
        <meta name="description" content="Nicolas YANG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Logo />
        <TopBar text='Infos' />
        <SwitchMode />
      </header>
      <main className={styles.main}>
        <Nav />
        <InfosList />
      </main>
      <footer>
        <LangSelect />
        <BottomBar />
      </footer>
    </div>
  )
}