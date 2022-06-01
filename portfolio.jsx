import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'
import TopBar from '../components/TopBar/TopBar'
import BottomBar from '../components/BottomBar/BottomBar'
import LangSelect from '../components/LangSelect/LangSelect'
import SwitchMode from '../components/SwitchMode/SwitchMode'
import PortfolioList from '../components/PortfolioList/PortfolioList'
import Logo from '../components/Logo/Logo'

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolas YANG | Portfolio</title>
        <meta name="description" content="Nicolas YANG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Logo />
        <TopBar text='Portfolio' />
        <SwitchMode />
      </header>
      <main className={styles.main}>
        <Nav />
        <PortfolioList />
      </main>
      <footer>
        <LangSelect />
        <BottomBar />
      </footer>
    </div>
  )
}