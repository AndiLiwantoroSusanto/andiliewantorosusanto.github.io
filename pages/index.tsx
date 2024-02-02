import Layout from "../components/layout"

export default function Home() {
  return (
    <>
      <Layout>
        <div className="w-screen h-screen flex">
          <div className="m-auto flex justify-center w-screen">
            <div className="w-5/12 space-y-4">
              <h2>
                Hello! My Name Is
              </h2>
              <h6 className="text-6xl font-extrabold">
                Andi Liwantoro Susanto
              </h6>
              <h2 className="text-xl">
                Software <span className="highlight">Engineer</span> at BCA Finance
              </h2>
            </div>
            <div className="w-4/12 space-y-4">
              <p>
                My first spark in coding ignited when I made a mod for a game called Minecraft. 
                Being able to change the game mechanics by just typing code was (and still is) 
                something cool to me. And I plan not to stop there.
              </p>
              <p>
                Now, I've been given the opportunity to change mechanics in the real world! 
                I've made impacts in multiple industries, including education, government, and 
                currently, one of the biggest loan companies, BCA Finance.
              </p>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen flex">
          <div className="m-auto">
            <div className="flex w-screen justify-center space-x-12">
              <div>
                <div>
                  BCA Finance
                </div>
                <div>
                  <div>
                    <div>
                      Application Development Specialist
                    </div>
                    <div>
                      (2021 - current)
                    </div>
                  </div>
                  <div>
                    <div>
                      Management Trainee (Tech)
                    </div>
                    <div>
                      (2020 - 2021)
                    </div>
                  </div>
                </div>
              </div>
              <div>
                Lead small team of developer, design system and build from scratch web application to support our
                Core business pipeline for acquiring and validating loan application. Including,
                integration with thirds party apps, loan calculation and automate multiple validation.
              </div>
            </div>
            <div className="flex w-screen justify-center space-x-12">
              <div>
                <div>
                  Various Governments
                </div>
                <div>
                  <div>
                    <div>
                      Backend Engineer (Freelance)
                    </div>
                    <div>
                      (2020 - 2022)
                    </div>
                  </div>
                </div>
              </div>
              <div>
                Creating System and integration with system,
                integrated with existing thermal sensor.
                Asd asdjkasdk.
              </div>
            </div>
          </div>
          <div className="flex w-screen justify-center space-x-12">
              <div>
                <div>
                  Bina Nusantara
                </div>
                <div>
                  <div>
                    <div>
                      Programmer
                    </div>
                    <div>
                      (2019 - 2020)
                    </div>
                  </div>
                  <div>
                    <div>
                      Junior Programmer
                    </div>
                    <div>
                      (2018 - 2019)
                    </div>
                  </div>
                </div>
              </div>
              <div>
                Create Bina Nusantara.
              </div>
            </div>
        </div>
      </Layout>
    </>
  )
}