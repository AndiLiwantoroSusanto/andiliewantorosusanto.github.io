import Head from "next/head"
import Layout from "../components/layout"

export default function Home() {
  return (
    <>
      <Layout>
        <div className="w-screen h-screen flex">
          <div className="m-auto flex justify-center w-screen">
            <div className="w-5/12">
              <h2>
                Hello! My Name Is
              </h2>
              <h6 className="text-6xl font-extrabold">
                Andi Liwantoro Susanto
              </h6>
              <h2 className="text-xl">
                Application Development Specialist at BCA Finance
              </h2>
            </div>
            <div className="w-4/12 gap-y-2">
              <p>
                My first spark in code was when i make a scipt for my favorite game! minecraft. 
                it was an amazing, a simple text can make something that i can see and play. 
                After that i knew i want to delve this hobby of mine to build something bigger.
              </p>
              <p>
                Currently, I lead a project that will transform BCA Finance to a better loan company!.
              </p>
              <p>
                I want to have more knowledge to be a better engineer
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}