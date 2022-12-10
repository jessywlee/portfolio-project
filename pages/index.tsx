import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jessica's Portfolio</title>
      </Head>
			<Header />
    </div>
  )
}
