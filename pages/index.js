import Head from "next/head"
import Layout from "../components/layout"

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <h1>
          First Post
        </h1>
        <h2>
          Kentang
        </h2>
      </Layout>
    </>
  )
}