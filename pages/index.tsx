import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jessica's Portfolio</title>
      </Head>
			<h1 className="text-3xl font-bold underline"> Hello </h1>
    </div>
  )
}
