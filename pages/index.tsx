import Head from 'next/head'
import Header from '../components/header'
import GlobalStyling from '../styles/global';

export default function Home() {
  return (
    <>
      <GlobalStyling />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,500;0,700;1,300&display=swap');
        </style>
      </Head>

      <main>
        <Header />
      </main>
    </>
  )
}
