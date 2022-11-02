import Head from 'next/head'
import LandingPage from '../Modules/Pages/LandingPage/LandingPage'
import Header from '../Modules/Layout/Header/Header'
import Footer from '../Modules/Layout/Footer/Footer'


// export const getServerSideProps = async () => {
//   // const res = await fetch('https://.../data')
//   // const data: Data = await res.json()

//   return {
//     props: {
//       data: [{name: "test", age: 15}],
//     },
//   }
// }

export default function Home() {
  return (
    <>
                    <Head>
                    <title>Avark</title>
                    <meta name="description" content="ARK HealthCare" />
                    </Head>
      <main>
        <Header />
        <LandingPage />
        <Footer />
      </main>
    </>
  )
}
