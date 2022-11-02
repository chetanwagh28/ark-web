import Head from 'next/head'
import Header from '../Modules/Layout/Header/Header'
import Footer from '../Modules/Layout/Footer/Footer'
import SearchPage from '../Modules/Pages/SearchPage/SearchPage'


// export const getServerSideProps = async () => {
//   // const res = await fetch('https://.../data')
//   // const data: Data = await res.json()

//   return {
//     props: {
//       data: [{name: "test", age: 15}],
//     },
//   }
// }

export default function Search() {
  return (
    <>
      <main>
        <Header />
        <SearchPage />
        <Footer />
      </main>
    </>
  )
}
